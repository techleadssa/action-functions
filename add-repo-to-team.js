import { Octokit } from '@octokit/core';

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
})

try {
    const response = await octokit.request('PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}', {
        org: 'teachleadssa-org',
        team_slug: 'backend',
        owner: 'teachleadssa-org',
        repo: 'nuevo-repositorio-creado-a-partir-de-una-plantilla',
        permission: 'admin'
    })
    console.log(response);
} catch (error) {
    throw new Error(error);
}