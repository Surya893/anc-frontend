# Instructions: Remove Frontend Files from Original Repository

All frontend files have been successfully migrated to this repository (`anc-frontend`). Now you need to remove them from the original repository (`anc-with-ai`).

## ✅ Verification: All Files Safely Copied

The following have been migrated and verified:

### Frontend Files (13 files)
- ✅ `frontend/Dockerfile`
- ✅ `frontend/README.md`
- ✅ `frontend/package.json`
- ✅ `frontend/public/index.html`
- ✅ `frontend/public/styles.css`
- ✅ `frontend/src/services/api.js`
- ✅ `frontend/src/services/websocket.js`
- ✅ `static/css/style.css`
- ✅ `static/js/app.js`
- ✅ `templates/demo-premium.html`
- ✅ `templates/demo.html`
- ✅ `templates/index.html`
- ✅ `templates/live-demo.html`

### Additional Documentation (5 files)
- ✅ `.gitignore`
- ✅ `.env.example`
- ✅ `ARCHITECTURE.md`
- ✅ API documentation (docs/API_README.md, docs/api-spec.yaml)
- ✅ Complete README from original repo

**All files verified with `diff` - exact copies confirmed!**

---

## 🗑️ How to Delete Frontend from Original Repository

You have **two options**:

### Option 1: Apply the Patch File (Recommended)

A patch file has been created that will cleanly remove all frontend files.

```bash
# Navigate to your local copy of anc-with-ai
cd /path/to/anc-with-ai

# Apply the patch
git am < /path/to/anc-frontend/remove-frontend.patch

# Push to GitHub
git push origin remove-frontend-files

# Create a PR on GitHub to merge this into main
```

### Option 2: Manual Deletion

If you prefer to do it manually:

```bash
# Navigate to your local copy of anc-with-ai
cd /path/to/anc-with-ai

# Create a new branch
git checkout -b remove-frontend-files

# Remove the directories
git rm -r frontend/
git rm -r static/
git rm -r templates/

# Commit the changes
git commit -m "Move frontend to dedicated repository

Frontend components migrated to: https://github.com/Surya893/anc-frontend

Removed directories:
- frontend/ - React application and web UI
- static/ - Static assets (CSS, JavaScript)
- templates/ - HTML templates

All frontend code is now maintained in anc-frontend repository."

# Push to GitHub
git push -u origin remove-frontend-files

# Create a PR on GitHub to merge into main
```

---

## 📝 Update README in Original Repository

After removing the frontend files, you should update the `README.md` in the `anc-with-ai` repository to reference the new frontend repository:

Add a section like this:

```markdown
## Frontend

The web frontend has been moved to a dedicated repository for better separation of concerns:

**Frontend Repository**: [https://github.com/Surya893/anc-frontend](https://github.com/Surya893/anc-frontend)

This repository now contains only:
- Backend API (Python/Flask)
- Firmware (ARM Cortex-M7)
- Cloud infrastructure
- ML models and training
- Scripts and tools
```

---

## 🔗 Cross-Repository References

### In `anc-with-ai` README:
Point to `anc-frontend` for web UI setup

### In `anc-frontend` README (already done):
Points back to `anc-with-ai` for complete system setup

---

## ✅ Final Checklist

- [ ] Apply patch or manually delete frontend files from `anc-with-ai`
- [ ] Push the deletion branch to GitHub
- [ ] Create and merge PR in `anc-with-ai`
- [ ] Update `anc-with-ai` README to reference the new frontend repo
- [ ] Verify the frontend repository (`anc-frontend`) is complete
- [ ] Update any CI/CD or deployment scripts that reference the old structure

---

## 🛡️ Safety Notes

- All files have been verified as exact copies before deletion
- The patch file is included in this repository for your records
- You can always restore files from git history if needed
- The original repository remains intact until you explicitly delete and push

---

## 📞 Support

If you encounter any issues with the migration or deletion:
1. Check that all files are present in the `anc-frontend` repository
2. Verify the patch file applies cleanly
3. Ensure you have push access to `anc-with-ai`

The migration is complete on this end - you just need to clean up the original repository!
