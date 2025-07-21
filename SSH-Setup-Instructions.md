# SSH Key Setup Instructions for GitHub

To fix the SSH permission denied error during deploy, follow these steps:

## 1. Check for existing SSH keys

Open a terminal and run:

```bash
ls -al ~/.ssh
```

Look for files named `id_rsa` and `id_rsa.pub` or similar.

## 2. Generate a new SSH key (if none exists)

If you don't have an SSH key, generate one with:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Press Enter to accept the default file location. Set a passphrase if desired.

## 3. Start the ssh-agent and add your key

Run:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

## 4. Add your SSH public key to GitHub

Copy the contents of your public key:

```bash
cat ~/.ssh/id_rsa.pub
```

Go to GitHub:

- Navigate to **Settings** > **SSH and GPG keys** > **New SSH key**
- Paste the copied key and save.

## 5. Test SSH connection

Run:

```bash
ssh -T git@github.com
```

You should see a success message.

## 6. Retry deploy

Now run:

```bash
npm run deploy
```

This should resolve the SSH permission denied error.

---

If you need help with any step, please ask.
