// NOTE This file is auto-generated by Contentlayer

import type { ImageFieldData, IsoDateTimeString, Markdown, MDX } from "contentlayer/core"
import * as Local from "contentlayer/source-files"

export { isType } from "contentlayer/client"

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type BlogPost = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: "BlogPost"
  /** The title of the blog post */
  title: string
  /** The date of the blog post */
  createdAt: string
  /** The modified time of the blog post */
  modifiedAt: string
  /** The summary of the blog post */
  summary: string
  /** Image for the blog post */
  image: string
  /** The author of the blog post */
  authorId: string
  tags: string[]
  /** MDX file body */
  body: MDX
  slug: string
  author: nested
}

export type Pages = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: "Pages"
  /** MDX file body */
  body: MDX
  slug: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: "Project"
  /** The name of the project */
  name: string
  /** The meta title of the project */
  title?: string | undefined
  /** The description of the project */
  description: string
  /** The link to the project's homepage */
  url?: string | undefined
  /** The url to the project's github page */
  github?: string | undefined
  /** The name of the icon to use */
  icon: string
  /** Image for the project */
  image?: string | undefined
  /** Whether to feature this project */
  featured?: boolean | undefined
  /** Whether this project is a collaboration */
  collab: boolean
  /** MDX file body */
  body: MDX
  slug: string
}

/** Nested types */

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = BlogPost | Pages | Project
export type DocumentTypeNames = "BlogPost" | "Pages" | "Project"

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allProjects: Project[]
  allBlogPosts: BlogPost[]
  allPages: Pages[]
}

export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  BlogPost: BlogPost
  Pages: Pages
  Project: Project
}

export type NestedTypeMap = {}
