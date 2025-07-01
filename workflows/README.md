# GitHub Actions Workflows

This repository includes several GitHub Actions workflows for different deployment scenarios.

## Available Workflows

### 1. `main.yml` - Basic CI/CD with GitHub Pages
**File:** `.github/workflows/main.yml`

This is the simplest workflow that:
- Runs tests on multiple Node.js versions (16.x, 18.x, 20.x)
- Builds the application
- Deploys to GitHub Pages (when pushing to main branch)

**Setup:**
1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. No additional secrets required

### 2. `vercel-deploy.yml` - Vercel Deployment
**File:** `.github/workflows/vercel-deploy.yml`

This workflow deploys your React app to Vercel:
- Creates preview deployments for pull requests
- Deploys to production when merging to main

**Setup:**
1. Create a Vercel account and project
2. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

### 3. `ci-cd.yml` - Comprehensive CI/CD Pipeline
**File:** `.github/workflows/ci-cd.yml`

This is a full-featured workflow that includes:
- Testing and linting
- Security audits with Snyk
- Staging deployment (develop branch)
- Production deployment (main branch)
- Performance testing with Lighthouse

**Setup:**
1. Add these secrets (optional):
   - `CODECOV_TOKEN`: For code coverage reports
   - `SNYK_TOKEN`: For security scanning
2. Configure your deployment commands in the workflow file

## Required Secrets

### For Vercel Deployment:
```bash
VERCEL_TOKEN=your_vercel_api_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### For Enhanced Features:
```bash
CODECOV_TOKEN=your_codecov_token
SNYK_TOKEN=your_snyk_token
```

## How to Get Vercel Secrets

1. **VERCEL_TOKEN:**
   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token

2. **VERCEL_ORG_ID:**
   - Run `vercel whoami` in your terminal
   - Or check the URL when logged into Vercel dashboard

3. **VERCEL_PROJECT_ID:**
   - Go to your project in Vercel dashboard
   - Check the project settings or URL

## Branch Strategy

- **`main`**: Production deployments
- **`develop`**: Staging deployments (if using comprehensive workflow)
- **Pull Requests**: Preview deployments and testing

## Customization

You can customize these workflows by:

1. **Modifying triggers:** Change the `on` section to trigger on different events
2. **Adding environments:** Create new deployment environments
3. **Customizing deployment:** Replace deployment commands with your preferred platform
4. **Adding notifications:** Integrate with Slack, Discord, or email

## Troubleshooting

### Common Issues:

1. **Build fails:** Check if all dependencies are in `package.json`
2. **Deployment fails:** Verify your secrets are correctly set
3. **Tests fail:** Ensure your test scripts work locally first

### Debugging:

- Check the Actions tab in your GitHub repository
- Review the logs for specific error messages
- Test workflows locally using `act` (GitHub Actions local runner)

## Best Practices

1. **Always test locally first** before pushing changes
2. **Use semantic versioning** for releases
3. **Keep secrets secure** and rotate them regularly
4. **Monitor deployment health** and set up alerts
5. **Use branch protection rules** to prevent direct pushes to main 