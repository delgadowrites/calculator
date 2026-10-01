# Changelog

## [Unreleased]

## 2026-09-30
### Added
- Styled all buttons: dark purple background (`--color-bg-2`), light gray text, 4px peach border (`--color-accent`), padding, 16px font size, and pointer cursor.
- Added button hover state: peach background with dark purple text (~9.3:1 contrast).
- Added button press state: button shifts 2px down and right when clicked (`transform: translate`).
- Styled footer link in cyan (`--color-accent-2`), the only palette color that passes 4.5:1 contrast on the gray background.
- Selected the display element in JavaScript (`const display`) and tested changing its text from the Console.
- Selected all digit and operator buttons as lists (`digitButtons`, `operatorButtons`) with `querySelectorAll`.
- Added temporary practice click listeners on the 7 and + buttons (to be replaced with listeners on all buttons).

### Changed
- None

### Fixed
- Replaced hardcoded hover color (`#bf00ff`) with its CSS variable.
- Improved button and hover text contrast: button background changed from gray to dark purple, and hover changed from purple (~2.3:1) to peach (~9.3:1).
- Added missing semicolons in the `button:hover` rule, the `a` rule, and the `display` declaration.
- Fixed `digitButtons` selecting `.operator` instead of `.digit`.
- Fixed the + listener being attached to `digitButtons[3]` (the 4 button) instead of `operatorButtons[3]`.

## 2026-09-28
### Added
- Added operator JS.
- Added buttons in html.

### Changed
-

### Fixed
- Bugs or mistakes corrected (e.g. "Fixed 'passiobnate' typo in About text")

## 2026-09-28
### Added
- Added skeleton, CSS file, CHANGELOG, and JS file.

### Changed
-

### Fixed
- Bugs or mistakes corrected (e.g. "Fixed 'passiobnate' typo in About text")
