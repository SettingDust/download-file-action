# download-files-action

![Workflow To Test Action](https://github.com/SettingDust/download-file-action/workflows/Workflow%20To%20Test%20Action/badge.svg)

GitHub Action to download files from the internet into the workspace.


## Inputs

- `file-url`: **(Required)** The URLs of the file to download. Split with line breaks
- `location`: *(Optional)* A path to download the files.

## Outputs

- `file-path`: The absolute path to the downloaded file.


## Example usage

In its simplest form you can you indicate what file to download and use it:

```yaml
- name: Download files
  uses: SettingDust/download-file-action@latest
  with:
    file-url: 'https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py'
- name: Check the file is there
  run: ls -l get-poetry.py
```
