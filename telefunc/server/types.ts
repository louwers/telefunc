import type { ViteDevServer } from 'vite'
export * from '../shared/types'
import { Telefunctions } from '../shared/types'

export type HttpRequest = {
  url: string
  method: string
  body: string | unknown
}

export type UserConfig = {
  viteDevServer?: ViteDevServer
  telefuncFiles?: Record<string, Telefunctions>
  root?: string
  isProduction: boolean
  telefuncUrl: string
  disableEtag: boolean
}

export type TelefuncContextUserProvided = Record<string, unknown>

type TelefuncFilePath = string
export type TelefuncFiles = Record<TelefuncFilePath, Telefunctions>
type FileExports = Record<string, unknown>
export type TelefuncFilesUntyped = Record<TelefuncFilePath, FileExports>
