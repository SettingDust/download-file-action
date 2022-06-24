/* eslint-disable i18n-text/no-en */
import * as path from 'path'

import * as core from '@actions/core'
import {DownloaderHelper} from 'node-downloader-helper'

async function main(): Promise<void> {
  try {
    const fileURL = core.getInput('file-url', {required: true}).split('\n')
    const fileLocation: string = core.getInput('location') || process.cwd()
    const filePaths: string[] = []
    await Promise.all(
      fileURL.map(async url => {
        core.info('Downloading file:')
        core.info(`\turl: ${url}`)
        core.info(`\tlocation: ${path.resolve(fileLocation)}`)
        const download = new DownloaderHelper(url, fileLocation)
        await download.start()
        download.on('end', ({filePath}) => filePaths.push(filePath))
      })
    )
    core.setOutput('files', filePaths.join('\n'))
    core.info('Files successfully downloaded.')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

main()
