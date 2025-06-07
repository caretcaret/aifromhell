# Demon Frontmatter Specification

This document outlines the structure of the frontmatter for each demon entry. All demon content is defined in `.md` files within the `/demons` directory, using YAML frontmatter exclusively.

## Fields

### `title`
- **Type**: `String`
- **Required**: Yes
- **Description**: The main title of the demon entry.

### `date`
- **Type**: `String` (format: `YYYY-MM-DD`)
- **Required**: Yes
- **Description**: The publication date of the entry.

### `source`
- **Type**: `Object`
- **Required**: Yes
- **Description**: An object containing details about the source of the information.

#### `source.url`
- **Type**: `String`
- **Required**: Yes
- **Description**: The direct URL to the source article or page.

#### `source.date`
- **Type**: `String` (format: `YYYY-MM-DD`)
- **Required**: No
- **Description**: The publication date of the source material.

#### `source.title`
- **Type**: `String`
- **Required**: No
- **Description**: The title of the source material. If not provided, the main `title` may be used as a fallback.

#### `source.image`
- **Type**: `String` (URL)
- **Required**: No
- **Description**: A URL to a relevant image from the source.

#### `source.description`
- **Type**: `String`
- **Required**: No
- **Description**: A brief description or quote from the source.

#### `source.author`
- **Type**: `String`
- **Required**: No
- **Description**: The author of the source material.

#### `source.site_name`
- **Type**: `String`
- **Required**: No
- **Description**: The name of the website or publication of the source.

### `decision_maker`
- **Type**: `String`
- **Required**: No
- **Description**: The entity or individual who made the key decision described in the entry.

### `summary`
- **Type**: `String`
- **Required**: Yes
- **Description**: A concise summary of the demon entry. This is used for previews and SEO.