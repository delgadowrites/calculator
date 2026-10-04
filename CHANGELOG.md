# Changelog

## [Unreleased]

## 2026-10-04
### Added
- Chaining: pressing an operator while a calculation is waiting calculates it first (e.g., `2 + 3 +` shows `5`; then `4 =` shows `9`). Works left to right.
- Decimal button (`.`): adds a decimal point, allows only one per number, and starts a new number as `0.`.
- `roundResult` function: rounds every result to at most 8 decimal places (e.g., `0.1 + 0.2` shows `0.3`, `1 ÷ 3` shows `0.33333333`) and passes `Error` through unchanged.
- Typed numbers are limited to 12 characters.
- Long numbers and results wrap inside the display instead of spilling outside it (`overflow-wrap: anywhere`).
- Published the calculator on GitHub Pages: https://delgadowrites.github.io/calculator/

### Changed
- Layout: the clear button moved to its own full-width row below the display and was relabeled `CLEAR`; the `.` button took its old spot next to `0`.
- Both places that show a result now pass it through `roundResult` first.
- The operator listener now checks for `Error` after the chaining calculation: if the screen shows `Error`, it cancels the waiting operator instead of storing `Error` as the first number.

### Fixed
- Fixed `CLEAR` only resetting the screen: it now also resets the first number, the operator and the new-number switch (e.g., `7 + CLEAR 5 =` shows `5`, not `12`).
- Fixed calculating with `Error` producing `NaN`.
- Fixed floating-point results like `0.30000000000000004`.
- Removed the debug `console.log` from the first line of `script.js`.

## 2026-10-03
### Added
- The `=` button now calculates: converts both stored numbers from text with `Number()`, sends them to `operate()`, and shows the result.
- Multiply (`×`) and divide (`÷`) now work.
- Dividing by zero shows `Error` instead of `Infinity`.
- `=` does nothing when no operator is waiting (e.g., `7 =` stays `7`), and pressing `=` twice no longer recalculates.
- After a result or `Error`, the next digit starts a new number (e.g., `83` then `2` shows `2`, not `832`). Uses a new `let startNewNumber` true/false switch.
- The first number stays visible on the screen after clicking an operator (e.g., `78 +` still shows `78` until the next digit is typed).

### Changed
- `operate()` now checks for `×` and `÷` (the button symbols) instead of `*` and `/`.
- The operator is reset to `null` after each calculation.
- Reformatted `script.js` to consistent 2-space indentation.
- The operator listener now turns on the `startNewNumber` switch instead of wiping the screen to `0`.

### Fixed
- Added the missing `const` before `result` in the equals listener.
- Fixed `×` and `÷` returning `Error` because their symbols didn't match the checks in `operate()`.
- Fixed `Infinity` showing on divide by zero.
- Fixed `=` showing `Error` when pressed with no operator.
- Fixed digits being added to the end of a result (`832`, `Error5`).
- Fixed inconsistent indentation in `operate()` and `divide()`.
- Fixed pressing an operator twice (`7 + +`) storing `0` as the first number.

## 2026-10-02
### Added
- The calculator now remembers the first number and the operator: created `let firstNumber` and `let currentOperator` (both start as `null`), and operator clicks save the screen text and the clicked operator into them.
- The display resets to `0` after an operator click, so the second number starts fresh (e.g., 7, 8, + then 5 shows `5`, not `785`).

### Changed
- Replaced the operator loop's `console.log` with logic that stores the first number and operator.

### Fixed
- Added the missing `;` to the `const clearButton` line.
- Fixed reversed assignments in the operator listener: `display.textContent = firstNumber;` became `firstNumber = display.textContent;` (and the same for the operator).

## 2026-10-01
### Added
- Added click listeners to all digit and operator buttons using `forEach` loops.
- Digit clicks now show on the display, adding each digit to the end (e.g., 7 then 8 shows `78`).
- The display's starting `0` is replaced by the first digit instead of staying in front (e.g., `5`, not `05`).
- Added the `C` button: clears the display back to `0`.

### Changed
- Replaced the 2 temporary practice listeners (7 and +) with loops covering every digit and operator button.

### Fixed
- Fixed digit clicks not updating the display: used assignment (`display.textContent = ...`) instead of `return` inside the click function.
- Fixed indentation inside the digit listener's `if / else`.

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
