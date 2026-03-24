const githubToken = process.env.GITHUB_TOKEN;
const username = 'Vlex127';

async function test() {
    console.log('Testing GITHUB_TOKEN:', !!githubToken);
    try {
        const response = await fetch('https://api.github.com/user/repos?affiliation=owner,collaborator&visibility=all', {
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Test'
            }
        });
        console.log('Status:', response.status);
        const repos = await response.json();
        console.log('Repos found:', Array.isArray(repos) ? repos.length : 'none');
        if (Array.isArray(repos)) {
            const seoAudit = repos.find(r => r.name.toLowerCase().includes('seo-audit'));
            console.log('Found seo-audit:', !!seoAudit);
            if (seoAudit) {
                console.log('Full name:', seoAudit.full_name);
                console.log('Private:', seoAudit.private);
                console.log('Homepage:', seoAudit.homepage);
            }
        }
    } catch (e) {
        console.error('Error:', e);
    }
}

test();
