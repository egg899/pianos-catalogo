const handler = async (req, res) => {
    const token = process.env.FACEBOOK_ACCESS_TOKEN;
    const pageId = process.env.FACEBOOK_PAGE_ID;

    if (!token || !pageId) {
        return res.status(500).json({
            error: "Missing Facebook Credentials"
        });
    }

    try {
        const response = await fetch(
            `https://graph.facebook.com/v23.0/${pageId}/posts?fields=id,message,created_time,permalink_url, attachments{media_type,media,url,subattachments}&access_token=${token}`
        );

        const data = await response.json();

        return res.status(response.status).json(data);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Could not fetch Facebook posts"
        });
    }
};

export default handler;