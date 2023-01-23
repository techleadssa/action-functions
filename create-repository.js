import { Octokit } from '@octokit/core';

const octokit = new Octokit({
    auth: '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'
})

try {
  const response = await octokit.request('POST /repos/{template_owner}/{template_repo}/generate', {
      template_owner: 'techleadssa',
      template_repo: 'template-repo-test',
      owner: 'teachleadssa-org',
      name: '2nuevo repositorio creado a partir de una plantilla',
      description: 'Este es el primer repo creado a partir de la plantilla',
      include_all_branches: false,
      'private': true
    });
      console.log(response);
  } catch (error) {
    throw new Error(error);
  }
