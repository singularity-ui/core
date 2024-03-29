# [4.4.0](https://github.com/singularity-ui/core/compare/v4.3.0...v4.4.0) (2022-08-19)


### Features

* **contents:** add hover background color in Table ([#111](https://github.com/singularity-ui/core/issues/111)) ([8cdedc7](https://github.com/singularity-ui/core/commit/8cdedc75fae4f0e0daca9f208b535313e19eaf72))

# [4.3.0](https://github.com/singularity-ui/core/compare/v4.2.2...v4.3.0) (2022-08-19)


### Features

* **contents:** add counters to Tasker ([#108](https://github.com/singularity-ui/core/issues/108)) ([c49a4cd](https://github.com/singularity-ui/core/commit/c49a4cdffa5d706f86892a9c4e401e6fc9ce6574))

## [4.2.2](https://github.com/singularity-ui/core/compare/v4.2.1...v4.2.2) (2022-07-28)


### Bug Fixes

* **MarkdownEditor:** pass down a key from parent to avoid losing focus while on controlled state ([#104](https://github.com/singularity-ui/core/issues/104)) ([1cd7677](https://github.com/singularity-ui/core/commit/1cd76773a450d1b8e58d50ae95e5a013430296aa))

## [4.2.1](https://github.com/singularity-ui/core/compare/v4.2.0...v4.2.1) (2022-07-22)


### Bug Fixes

* sringify errors cases in key generator helper ([#102](https://github.com/singularity-ui/core/issues/102)) ([dd381ab](https://github.com/singularity-ui/core/commit/dd381aba9097e9f0880f94f46f90e1dcb13fe696))

# [4.2.0](https://github.com/singularity-ui/core/compare/v4.1.0...v4.2.0) (2022-06-20)


### Features

* **contents:** add custom cell type for Table component ([#100](https://github.com/singularity-ui/core/issues/100)) ([32be288](https://github.com/singularity-ui/core/commit/32be28832eb40ec4303508e787ca7e3d6af43d1c))

# [4.1.0](https://github.com/singularity-ui/core/compare/v4.0.3...v4.1.0) (2022-05-08)


### Bug Fixes

* **fields:** add name & id props to MarkdownEditor ([ebd2e20](https://github.com/singularity-ui/core/commit/ebd2e209f83f2cbab849a9c7b153fc006b143641))


### Features

* **fields:** expose all components props definitions ([#89](https://github.com/singularity-ui/core/issues/89)) ([dba8093](https://github.com/singularity-ui/core/commit/dba80934d1baac36a2335824cc12a7c9e5e61164))

## [4.0.3](https://github.com/singularity-ui/core/compare/v4.0.2...v4.0.3) (2022-04-25)


### Bug Fixes

* **fields:** force MarkdownEditor re-rendering on default value change ([#87](https://github.com/singularity-ui/core/issues/87)) ([bc4b0db](https://github.com/singularity-ui/core/commit/bc4b0db54749ca106f06f8d3343d306fc1fa2b0b))

## [4.0.2](https://github.com/singularity-ui/core/compare/v4.0.1...v4.0.2) (2022-04-25)


### Bug Fixes

* **build:** remove is-hotkey all together ([#85](https://github.com/singularity-ui/core/issues/85)) ([7fa8e6d](https://github.com/singularity-ui/core/commit/7fa8e6d35f13a48fcb031ad174293ae00f095ec6))

## [4.0.1](https://github.com/singularity-ui/core/compare/v4.0.0...v4.0.1) (2022-04-25)


### Bug Fixes

* **build:** include is-hotkey dep in build ([#83](https://github.com/singularity-ui/core/issues/83)) ([ba17da7](https://github.com/singularity-ui/core/commit/ba17da701080aa480a0d220895467733f3ee4845))
* **fields:** handle MarkdownEditor default value when empty ([#82](https://github.com/singularity-ui/core/issues/82)) ([7990cf4](https://github.com/singularity-ui/core/commit/7990cf42cb57b2cadccabe3e11653d5723931bf8))

# [4.0.0](https://github.com/singularity-ui/core/compare/v3.1.0...v4.0.0) (2022-04-25)


### Bug Fixes

* **contents:** use row id as key in Table ([#78](https://github.com/singularity-ui/core/issues/78)) ([d360123](https://github.com/singularity-ui/core/commit/d360123d9f6e989af652ab952f6a9efb488c056e))
* **fields:** omit inherited onInput type from MarkdownEditor ([#76](https://github.com/singularity-ui/core/issues/76)) ([70b2a50](https://github.com/singularity-ui/core/commit/70b2a50f30e305ca0263c2423662b3042e5badcf))


### Features

* **fields:** finalize MarkdownEditor ([#77](https://github.com/singularity-ui/core/issues/77)) ([a19e2d7](https://github.com/singularity-ui/core/commit/a19e2d77a70879fe3ea9a4d2f804b080b26fc944))


### BREAKING CHANGES

* **fields:** - All icons use named exports instead of default ones
- `UNIT` enum constant has been renamed `Unit`
- MarkdownEditor `onInput` prop has been renamed `onChange`
* **contents:** `key` prop is now required for all columns in Table, including action ones

# [3.1.0](https://github.com/singularity-ui/core/compare/v3.0.5...v3.1.0) (2022-04-07)


### Features

* **contents:** add transform prop to Table boolean column ([24d973e](https://github.com/singularity-ui/core/commit/24d973ec84f1c507546948df832751d29c6a6315))

## [3.0.5](https://github.com/singularity-ui/core/compare/v3.0.4...v3.0.5) (2022-03-24)

## [3.0.4](https://github.com/singularity-ui/core/compare/v3.0.3...v3.0.4) (2022-02-16)


### Bug Fixes

* add exports prop in dist package.json ([6b96459](https://github.com/singularity-ui/core/commit/6b964590f8c9a342e2f899c1ea9981c23d784b6c))

## [3.0.3](https://github.com/singularity-ui/core/compare/v3.0.2...v3.0.3) (2022-02-16)


### Bug Fixes

* remove package.json main prop from dist ([eebf90e](https://github.com/singularity-ui/core/commit/eebf90e5d94d07599cca9ab953174615d40e613f))

## [3.0.2](https://github.com/singularity-ui/core/compare/v3.0.1...v3.0.2) (2022-02-16)


### Bug Fixes

* **GlobalStyle:** remove CSS imports ([f54cfb6](https://github.com/singularity-ui/core/commit/f54cfb600c7585b595800ee411ad4c87519a21dd))

## [3.0.1](https://github.com/singularity-ui/core/compare/v3.0.0...v3.0.1) (2022-02-16)


### Bug Fixes

* **GlobalStyle:** include @fontsource/poppins as a dep ([86e6dad](https://github.com/singularity-ui/core/commit/86e6dadc44e8cd351f21bad7bcd3d4bef83f44e8))

# [3.0.0](https://github.com/singularity-ui/core/compare/v2.5.0...v3.0.0) (2022-02-16)


### Build System

* migrate to preserved modules structure ([041c060](https://github.com/singularity-ui/core/commit/041c060feb9d320706a621802c86eb035f583a63))


### BREAKING CHANGES

* This may require a radical change of setup for projects using
this library.

# [2.5.0](https://github.com/singularity-ui/core/compare/v2.4.1...v2.5.0) (2022-02-10)


### Features

* **icons:** remove Material icons from dist ([1f17053](https://github.com/singularity-ui/core/commit/1f170532857d22c16bd96b46a97e231a53cac574))

## [2.4.1](https://github.com/singularity-ui/core/compare/v2.4.0...v2.4.1) (2022-02-01)


### Bug Fixes

* **fields:** set id via inputId in Select ([f64bb3e](https://github.com/singularity-ui/core/commit/f64bb3e84a5866e4dd93cda38c9306fea283c429))

# [2.4.0](https://github.com/singularity-ui/core/compare/v2.3.0...v2.4.0) (2022-02-01)


### Features

* **fields:** generate htmlFor + id from name in FileInput, Select & TextInput ([0519c64](https://github.com/singularity-ui/core/commit/0519c64d231eb4d5cad16e6d2af7c69c02ab0dee))

# [2.3.0](https://github.com/singularity-ui/core/compare/v2.2.1...v2.3.0) (2022-01-30)


### Features

* **elements:** add className on Card ([3645b62](https://github.com/singularity-ui/core/commit/3645b62b8d12c07abe1d0a066e8769233e0f489b))

## [2.2.1](https://github.com/singularity-ui/core/compare/v2.2.0...v2.2.1) (2022-01-30)


### Bug Fixes

* **fields:** make Select isAsync prop optional ([1797bef](https://github.com/singularity-ui/core/commit/1797bef400d74abd023e143be49f47332ec80a95))

# [2.2.0](https://github.com/singularity-ui/core/compare/v2.1.0...v2.2.0) (2022-01-30)


### Features

* **contents:** add Table tags column type ([beffed6](https://github.com/singularity-ui/core/commit/beffed68c1961b63fa0dc6c778cdd843c559ed41))
* **elements:** add Tag ([1bc83bd](https://github.com/singularity-ui/core/commit/1bc83bd73c87a20c5de68ecdd7776a2affb81471))
* **fields:** expose react-select declarations for Select ([79334b5](https://github.com/singularity-ui/core/commit/79334b5ad7fcb9ea601a771e7d0e539f70b585a3))
* **fields:** expose SelectProps definition ([cbfe635](https://github.com/singularity-ui/core/commit/cbfe63560d28007d5b694252a5bd86cc871e6fac))

# [2.1.0](https://github.com/singularity-ui/core/compare/v2.0.0...v2.1.0) (2022-01-25)


### Features

* **contents:** add Table column grow prop ([b637837](https://github.com/singularity-ui/core/commit/b637837e6165a94ad1ba677fddf95b2a44b290b6))
* **contents:** add Table pagination full async support ([f1709c1](https://github.com/singularity-ui/core/commit/f1709c1aa38b338b2097d68dbe768e20d1001fd3))

# [2.0.0](https://github.com/singularity-ui/core/compare/v1.10.0...v2.0.0) (2022-01-25)


### Bug Fixes

* **build:** disable rollup modules preservation ([4f35bcb](https://github.com/singularity-ui/core/commit/4f35bcbfa25e0bebd81383acb4d71ba83c6e5bd9))
* **build:** fix styled-components imports to make them compatible with Next.js ([f561f2a](https://github.com/singularity-ui/core/commit/f561f2a8db0e8e2c3ebe207837fb519a90424b11))
* **build:** remove CSS imports from GlobalStyle declaration ([1cf7324](https://github.com/singularity-ui/core/commit/1cf7324f36123bd7a875300a06eeb7bf5df6e091))
* **build:** split bundle & declarations emission ([73cb60e](https://github.com/singularity-ui/core/commit/73cb60e1212272f600123dcbc274be2d2c15638e))
* **build:** switch to named exports with preserved modules ([3917e98](https://github.com/singularity-ui/core/commit/3917e9877bb794666ee206e8865cfa3e26b82fb8))
* **components:** add missing types ([9931ac6](https://github.com/singularity-ui/core/commit/9931ac624841109bfa227cfc3124899f99764597))
* **components:** forward VerticalMenu.Item ref ([f9c7a9b](https://github.com/singularity-ui/core/commit/f9c7a9bca49c6dc1da18c55f62dcb84bdf334d19))
* **contents:** add missing Table types ([eb72302](https://github.com/singularity-ui/core/commit/eb72302a9782acdb74638a2cb52b13477fe6f387))
* **contents:** add some missing types in Table ([8d822d9](https://github.com/singularity-ui/core/commit/8d822d9bc3575b9f92c12b79f59211ef640a2584))
* **contents:** allow Table columm key to return anything ([211fbf2](https://github.com/singularity-ui/core/commit/211fbf2505b83d510b6a83625cec29decc529e63))
* **contents:** check for undefined instead of null in Table head sort icon ([eae8556](https://github.com/singularity-ui/core/commit/eae855643ad83b786f73a08ba187c592e6d71066))
* **contents:** downgrade react-paginate to v7 for Table ([17a0d14](https://github.com/singularity-ui/core/commit/17a0d142aa2e3f8011eeb4bbda8345b8399837a8))
* **contents:** force ellipsis for Table cells overflowing text ([9195ebb](https://github.com/singularity-ui/core/commit/9195ebb3d1200f016160b464129dbacecb5cd881))
* **contents:** handle Table pagination cases greater than 5 pages ([ce5c8db](https://github.com/singularity-ui/core/commit/ce5c8db86fc60ab23be74414619427c11c6196c5))
* **contents:** replace react-pagination by internal one in Table ([0f8e4ad](https://github.com/singularity-ui/core/commit/0f8e4adeb58090ad688eff0a84f23ebc126c6bc4))
* **contents:** restore Table sorting switch ([11081b7](https://github.com/singularity-ui/core/commit/11081b7ff72ebdf9fb5d216835fa7fa6f15cee47))
* **demo:** remove left file ([0000ce4](https://github.com/singularity-ui/core/commit/0000ce4f706b18ad8472011f1be23aa5d9eaf76f))
* **elements:** expose all types ([90e0887](https://github.com/singularity-ui/core/commit/90e0887a4f6af3c6685a80ff3e6460747be4973f))
* **elements:** remove fowarded ref prop types in Button ([51392c7](https://github.com/singularity-ui/core/commit/51392c7610e5636185716bdba16b558ecf0ea049))
* **elements:** switch prop types to forwarded ref in Button ([acd8d27](https://github.com/singularity-ui/core/commit/acd8d27c4de8e6b4e31f107a204555b15c0910d6))
* **fields:** add missing FileInput placeholder ([bf07f6d](https://github.com/singularity-ui/core/commit/bf07f6d70d75d162d33aa4da8cd994630df7720f))
* **fields:** add missing types ([b4ad2a0](https://github.com/singularity-ui/core/commit/b4ad2a0b3dad67869cbd571f26f212ee51d52ff3))
* **fields:** anyfy Select props type ([995e503](https://github.com/singularity-ui/core/commit/995e50393ffe67c2c25b48d610987570c378e9bb))
* **fields:** hack react-select/async import to make it ESM-compatible ([742cd9a](https://github.com/singularity-ui/core/commit/742cd9a4109020409ae7c98c7046a358de8f4028))
* **fields:** use underscore to prevent size prop collision in TextInput ([37315af](https://github.com/singularity-ui/core/commit/37315af531adf148944a259d085a915f1c3a1183))
* **icons:** add missing js ext for externalized import in Icon ([cfe7dbb](https://github.com/singularity-ui/core/commit/cfe7dbbc51ff09652ffe509b982b9d6fdb88590f))
* **icons:** add missing Material icons props ([0909a56](https://github.com/singularity-ui/core/commit/0909a56e470370fc554bcebe863cfa8ed4732d34))
* **icons:** add missing PropTypes import in Material icons ([447d80d](https://github.com/singularity-ui/core/commit/447d80d53e50f2722de2b617b9901897ff7e413e))
* **icons:** fill svg instead of path color in Material icons ([ecda54b](https://github.com/singularity-ui/core/commit/ecda54b6b1635eca0936b10e2aaad1b09bb58e1d))
* **icons:** make default icons internal ones ([6383e27](https://github.com/singularity-ui/core/commit/6383e27c1536bda173a9e4b40ebf62541f9fc780))
* **icons:** remove deprecated enable-background SVG prop in Material icons ([487692e](https://github.com/singularity-ui/core/commit/487692eed779b94b961951628b18112ffc59f3c7))
* **icons:** replace enable-background native prop with enableSource ([d4444b0](https://github.com/singularity-ui/core/commit/d4444b0eb60791cb7c5f86238aed26f0e0130b37))
* restore theme body white color ([17f848e](https://github.com/singularity-ui/core/commit/17f848ea0408a83f647f028452a5d7f1a6ba5513))
* **rollup:** exclude common/constants while building icons ([48a7ae0](https://github.com/singularity-ui/core/commit/48a7ae09820c1e646442a5f63c76e3015f34e365))
* **rollup:** nake react-select/dist/react-select.cjs.js external ([85a4050](https://github.com/singularity-ui/core/commit/85a4050b8f6217095b1bd6769c1f969448335c82))


* build(rollup)!: migrate to ESM ([5ebc537](https://github.com/singularity-ui/core/commit/5ebc53773495f43cba9a327b89d0a2a2516b637b))


### Features

* **common:** expose Theme & PartialTheme types ([10ebdd9](https://github.com/singularity-ui/core/commit/10ebdd9d4272c408b8ea15090964dde46d2c740c))
* **components:** add Modal ([86c7283](https://github.com/singularity-ui/core/commit/86c728397cae4e4434ad9377812b14e1379c4cc5))
* **components:** add VerticalMenu ([3197bf3](https://github.com/singularity-ui/core/commit/3197bf3521838154aef2e73572e90b9b44657e41))
* **contents:** add naive Table pagination logic ([55bbc60](https://github.com/singularity-ui/core/commit/55bbc60e41c1670789e6ed98e5c3f5318440aa87))
* **contents:** add title to Table value cell ([2a18f03](https://github.com/singularity-ui/core/commit/2a18f038753c73236189707a77fd1979a98272f5))
* **elements:** add Field ([b4611c9](https://github.com/singularity-ui/core/commit/b4611c9871b5d691a54f60948510f3def8cc1a3c))
* **fields:** add FileInput ([dd1300a](https://github.com/singularity-ui/core/commit/dd1300a7f76a981fdb2afabc430f3772029ee8b4))
* **fields:** add isAutoResizing prop to Textarea ([97874eb](https://github.com/singularity-ui/core/commit/97874ebd9e29aeba93150bf7a1cd1b9afc4d4767))
* **fields:** add naive MarkdownEditor ([c0f2a03](https://github.com/singularity-ui/core/commit/c0f2a032f2378344eba18fa3d6ea77200bd0d30f))
* **fields:** add pageCount prop to Table ([c93a66c](https://github.com/singularity-ui/core/commit/c93a66c608f4706550162a20334432087c600a59))
* **fields:** add pageIndex prop to Table ([f966821](https://github.com/singularity-ui/core/commit/f966821ade2448a825860848c175d100a25a5b7d))
* **fields:** handle drag & drop in FileInput ([4063c78](https://github.com/singularity-ui/core/commit/4063c78bb7758640410908f4c7f2a7d5462f1263))
* **icons:** integrate Material icons in build ([b315ccb](https://github.com/singularity-ui/core/commit/b315ccb2544653d853ff1fb1954e40a77b2de993))
* migrate to typescript with dist declarations ([388d6ce](https://github.com/singularity-ui/core/commit/388d6ceaa329e08040ec689ebcaa79a3476218c0))
* set body & html height in GlobalStyle ([40c3449](https://github.com/singularity-ui/core/commit/40c34496c1172bb480b6677ca74d6f912ce40ab3))
* set body line-height in GlobalStyle ([194904d](https://github.com/singularity-ui/core/commit/194904d13a140e67fb9e60695727882f27a13f80))


### Reverts

* ci(github): set git authoring envs for semantic-release ([d18b785](https://github.com/singularity-ui/core/commit/d18b785a62acb5defdb7253becdabff1c4624c4b))


### BREAKING CHANGES

* This package will only be distributed as a JavaScript
module starting from version 3.0.0 and greater.

# [2.0.0-beta.22](https://github.com/singularity-ui/core/compare/v2.0.0-beta.21...v2.0.0-beta.22) (2022-01-20)


### Features

* **common:** expose Theme & PartialTheme types ([10ebdd9](https://github.com/singularity-ui/core/commit/10ebdd9d4272c408b8ea15090964dde46d2c740c))

# [2.0.0-beta.21](https://github.com/singularity-ui/core/compare/v2.0.0-beta.20...v2.0.0-beta.21) (2022-01-13)


### Features

* **contents:** add title to Table value cell ([2a18f03](https://github.com/singularity-ui/core/commit/2a18f038753c73236189707a77fd1979a98272f5))

# [2.0.0-beta.20](https://github.com/singularity-ui/core/compare/v2.0.0-beta.19...v2.0.0-beta.20) (2022-01-13)


### Bug Fixes

* **elements:** expose all types ([90e0887](https://github.com/singularity-ui/core/commit/90e0887a4f6af3c6685a80ff3e6460747be4973f))

# [2.0.0-beta.19](https://github.com/singularity-ui/core/compare/v2.0.0-beta.18...v2.0.0-beta.19) (2022-01-13)


### Features

* **fields:** add naive MarkdownEditor ([c0f2a03](https://github.com/singularity-ui/core/commit/c0f2a032f2378344eba18fa3d6ea77200bd0d30f))
* **fields:** handle drag & drop in FileInput ([4063c78](https://github.com/singularity-ui/core/commit/4063c78bb7758640410908f4c7f2a7d5462f1263))

# [2.0.0-beta.18](https://github.com/singularity-ui/core/compare/v2.0.0-beta.17...v2.0.0-beta.18) (2022-01-12)


### Bug Fixes

* **contents:** handle Table pagination cases greater than 5 pages ([ce5c8db](https://github.com/singularity-ui/core/commit/ce5c8db86fc60ab23be74414619427c11c6196c5))
* **contents:** restore Table sorting switch ([11081b7](https://github.com/singularity-ui/core/commit/11081b7ff72ebdf9fb5d216835fa7fa6f15cee47))


### Features

* **fields:** add isAutoResizing prop to Textarea ([97874eb](https://github.com/singularity-ui/core/commit/97874ebd9e29aeba93150bf7a1cd1b9afc4d4767))
* **fields:** add pageCount prop to Table ([c93a66c](https://github.com/singularity-ui/core/commit/c93a66c608f4706550162a20334432087c600a59))
* **fields:** add pageIndex prop to Table ([f966821](https://github.com/singularity-ui/core/commit/f966821ade2448a825860848c175d100a25a5b7d))

# [2.0.0-beta.17](https://github.com/singularity-ui/core/compare/v2.0.0-beta.16...v2.0.0-beta.17) (2022-01-05)


### Bug Fixes

* **icons:** make default icons internal ones ([6383e27](https://github.com/singularity-ui/core/commit/6383e27c1536bda173a9e4b40ebf62541f9fc780))

# [2.0.0-beta.16](https://github.com/singularity-ui/core/compare/v2.0.0-beta.15...v2.0.0-beta.16) (2022-01-05)


### Bug Fixes

* **icons:** remove deprecated enable-background SVG prop in Material icons ([487692e](https://github.com/singularity-ui/core/commit/487692eed779b94b961951628b18112ffc59f3c7))

# [2.0.0-beta.15](https://github.com/singularity-ui/core/compare/v2.0.0-beta.14...v2.0.0-beta.15) (2022-01-05)


### Bug Fixes

* **components:** forward VerticalMenu.Item ref ([f9c7a9b](https://github.com/singularity-ui/core/commit/f9c7a9bca49c6dc1da18c55f62dcb84bdf334d19))

# [2.0.0-beta.14](https://github.com/singularity-ui/core/compare/v2.0.0-beta.13...v2.0.0-beta.14) (2022-01-05)


### Bug Fixes

* **icons:** replace enable-background native prop with enableSource ([d4444b0](https://github.com/singularity-ui/core/commit/d4444b0eb60791cb7c5f86238aed26f0e0130b37))

# [2.0.0-beta.13](https://github.com/singularity-ui/core/compare/v2.0.0-beta.12...v2.0.0-beta.13) (2022-01-05)


### Bug Fixes

* restore theme body white color ([17f848e](https://github.com/singularity-ui/core/commit/17f848ea0408a83f647f028452a5d7f1a6ba5513))

# [2.0.0-beta.12](https://github.com/singularity-ui/core/compare/v2.0.0-beta.11...v2.0.0-beta.12) (2022-01-05)


### Features

* **components:** add Modal ([86c7283](https://github.com/singularity-ui/core/commit/86c728397cae4e4434ad9377812b14e1379c4cc5))
* **components:** add VerticalMenu ([3197bf3](https://github.com/singularity-ui/core/commit/3197bf3521838154aef2e73572e90b9b44657e41))
* **elements:** add Field ([b4611c9](https://github.com/singularity-ui/core/commit/b4611c9871b5d691a54f60948510f3def8cc1a3c))

# [2.0.0-beta.11](https://github.com/singularity-ui/core/compare/v2.0.0-beta.10...v2.0.0-beta.11) (2021-12-17)


### Bug Fixes

* **contents:** check for undefined instead of null in Table head sort icon ([eae8556](https://github.com/singularity-ui/core/commit/eae855643ad83b786f73a08ba187c592e6d71066))

# [2.0.0-beta.10](https://github.com/singularity-ui/core/compare/v2.0.0-beta.9...v2.0.0-beta.10) (2021-12-13)


### Bug Fixes

* **contents:** force ellipsis for Table cells overflowing text ([9195ebb](https://github.com/singularity-ui/core/commit/9195ebb3d1200f016160b464129dbacecb5cd881))

# [2.0.0-beta.9](https://github.com/singularity-ui/core/compare/v2.0.0-beta.8...v2.0.0-beta.9) (2021-11-26)


### Features

* **contents:** add naive Table pagination logic ([55bbc60](https://github.com/singularity-ui/core/commit/55bbc60e41c1670789e6ed98e5c3f5318440aa87))

# [2.0.0-beta.8](https://github.com/singularity-ui/core/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2021-11-25)


### Bug Fixes

* **contents:** allow Table columm key to return anything ([211fbf2](https://github.com/singularity-ui/core/commit/211fbf2505b83d510b6a83625cec29decc529e63))

# [2.0.0-beta.7](https://github.com/singularity-ui/core/compare/v2.0.0-beta.6...v2.0.0-beta.7) (2021-11-22)


### Bug Fixes

* **fields:** anyfy Select props type ([995e503](https://github.com/singularity-ui/core/commit/995e50393ffe67c2c25b48d610987570c378e9bb))

# [2.0.0-beta.6](https://github.com/singularity-ui/core/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2021-11-22)


### Bug Fixes

* **fields:** add missing FileInput placeholder ([bf07f6d](https://github.com/singularity-ui/core/commit/bf07f6d70d75d162d33aa4da8cd994630df7720f))

# [2.0.0-beta.5](https://github.com/singularity-ui/core/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2021-11-22)


### Features

* **fields:** add FileInput ([dd1300a](https://github.com/singularity-ui/core/commit/dd1300a7f76a981fdb2afabc430f3772029ee8b4))

# [2.0.0-beta.4](https://github.com/singularity-ui/core/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2021-11-21)


### Bug Fixes

* **contents:** add missing Table types ([eb72302](https://github.com/singularity-ui/core/commit/eb72302a9782acdb74638a2cb52b13477fe6f387))

# [2.0.0-beta.3](https://github.com/singularity-ui/core/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2021-11-21)


### Bug Fixes

* **components:** add missing types ([9931ac6](https://github.com/singularity-ui/core/commit/9931ac624841109bfa227cfc3124899f99764597))
* **contents:** add some missing types in Table ([8d822d9](https://github.com/singularity-ui/core/commit/8d822d9bc3575b9f92c12b79f59211ef640a2584))
* **demo:** remove left file ([0000ce4](https://github.com/singularity-ui/core/commit/0000ce4f706b18ad8472011f1be23aa5d9eaf76f))

# [2.0.0-beta.2](https://github.com/singularity-ui/core/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2021-11-18)


### Bug Fixes

* **fields:** add missing types ([b4ad2a0](https://github.com/singularity-ui/core/commit/b4ad2a0b3dad67869cbd571f26f212ee51d52ff3))
* **fields:** use underscore to prevent size prop collision in TextInput ([37315af](https://github.com/singularity-ui/core/commit/37315af531adf148944a259d085a915f1c3a1183))

# [2.0.0-beta.2](https://github.com/singularity-ui/core/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2021-11-18)


### Bug Fixes

* **fields:** add missing types ([b4ad2a0](https://github.com/singularity-ui/core/commit/b4ad2a0b3dad67869cbd571f26f212ee51d52ff3))
* **fields:** use underscore to prevent size prop collision in TextInput ([37315af](https://github.com/singularity-ui/core/commit/37315af531adf148944a259d085a915f1c3a1183))

# [2.0.0-beta.2](https://github.com/singularity-ui/core/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2021-11-18)


### Bug Fixes

* **fields:** add missing types ([b4ad2a0](https://github.com/singularity-ui/core/commit/b4ad2a0b3dad67869cbd571f26f212ee51d52ff3))

# [2.0.0-beta.1](https://github.com/singularity-ui/core/compare/v1.10.0...v2.0.0-beta.1) (2021-11-17)


### Bug Fixes

* **build:** disable rollup modules preservation ([4f35bcb](https://github.com/singularity-ui/core/commit/4f35bcbfa25e0bebd81383acb4d71ba83c6e5bd9))
* **build:** fix styled-components imports to make them compatible with Next.js ([f561f2a](https://github.com/singularity-ui/core/commit/f561f2a8db0e8e2c3ebe207837fb519a90424b11))
* **build:** remove CSS imports from GlobalStyle declaration ([1cf7324](https://github.com/singularity-ui/core/commit/1cf7324f36123bd7a875300a06eeb7bf5df6e091))
* **build:** split bundle & declarations emission ([73cb60e](https://github.com/singularity-ui/core/commit/73cb60e1212272f600123dcbc274be2d2c15638e))
* **build:** switch to named exports with preserved modules ([3917e98](https://github.com/singularity-ui/core/commit/3917e9877bb794666ee206e8865cfa3e26b82fb8))
* **contents:** downgrade react-paginate to v7 for Table ([17a0d14](https://github.com/singularity-ui/core/commit/17a0d142aa2e3f8011eeb4bbda8345b8399837a8))
* **contents:** replace react-pagination by internal one in Table ([0f8e4ad](https://github.com/singularity-ui/core/commit/0f8e4adeb58090ad688eff0a84f23ebc126c6bc4))
* **elements:** remove fowarded ref prop types in Button ([51392c7](https://github.com/singularity-ui/core/commit/51392c7610e5636185716bdba16b558ecf0ea049))
* **elements:** switch prop types to forwarded ref in Button ([acd8d27](https://github.com/singularity-ui/core/commit/acd8d27c4de8e6b4e31f107a204555b15c0910d6))
* **fields:** hack react-select/async import to make it ESM-compatible ([742cd9a](https://github.com/singularity-ui/core/commit/742cd9a4109020409ae7c98c7046a358de8f4028))
* **icons:** add missing js ext for externalized import in Icon ([cfe7dbb](https://github.com/singularity-ui/core/commit/cfe7dbbc51ff09652ffe509b982b9d6fdb88590f))
* **icons:** add missing Material icons props ([0909a56](https://github.com/singularity-ui/core/commit/0909a56e470370fc554bcebe863cfa8ed4732d34))
* **icons:** add missing PropTypes import in Material icons ([447d80d](https://github.com/singularity-ui/core/commit/447d80d53e50f2722de2b617b9901897ff7e413e))
* **icons:** fill svg instead of path color in Material icons ([ecda54b](https://github.com/singularity-ui/core/commit/ecda54b6b1635eca0936b10e2aaad1b09bb58e1d))
* **rollup:** exclude common/constants while building icons ([48a7ae0](https://github.com/singularity-ui/core/commit/48a7ae09820c1e646442a5f63c76e3015f34e365))
* **rollup:** nake react-select/dist/react-select.cjs.js external ([85a4050](https://github.com/singularity-ui/core/commit/85a4050b8f6217095b1bd6769c1f969448335c82))


* build(rollup)!: migrate to ESM ([5ebc537](https://github.com/singularity-ui/core/commit/5ebc53773495f43cba9a327b89d0a2a2516b637b))


### Features

* **icons:** integrate Material icons in build ([b315ccb](https://github.com/singularity-ui/core/commit/b315ccb2544653d853ff1fb1954e40a77b2de993))
* migrate to typescript with dist declarations ([388d6ce](https://github.com/singularity-ui/core/commit/388d6ceaa329e08040ec689ebcaa79a3476218c0))
* set body & html height in GlobalStyle ([40c3449](https://github.com/singularity-ui/core/commit/40c34496c1172bb480b6677ca74d6f912ce40ab3))
* set body line-height in GlobalStyle ([194904d](https://github.com/singularity-ui/core/commit/194904d13a140e67fb9e60695727882f27a13f80))


### Reverts

* ci(github): set git authoring envs for semantic-release ([d18b785](https://github.com/singularity-ui/core/commit/d18b785a62acb5defdb7253becdabff1c4624c4b))


### BREAKING CHANGES

* This package will only be distributed as a JavaScript
module starting from version 3.0.0 and greater.

# [2.0.0-alpha.18](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2021-11-17)


### Bug Fixes

* **elements:** remove fowarded ref prop types in Button ([51392c76](https://github.com/singularity-ui/core/commit/51392c7610e5636185716bdba16b558ecf0ea049))
* **icons:** fill svg instead of path color in Material icons ([ecda54b6](https://github.com/singularity-ui/core/commit/ecda54b6b1635eca0936b10e2aaad1b09bb58e1d))

# [2.0.0-alpha.17](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2021-11-17)


### Bug Fixes

* **icons:** add missing PropTypes import in Material icons ([447d80d5](https://github.com/singularity-ui/core/commit/447d80d53e50f2722de2b617b9901897ff7e413e))

# [2.0.0-alpha.16](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2021-11-17)


### Bug Fixes

* **icons:** add missing Material icons props ([0909a56e](https://github.com/singularity-ui/core/commit/0909a56e470370fc554bcebe863cfa8ed4732d34))

# [2.0.0-alpha.15](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2021-11-17)


### Features

* **icons:** integrate Material icons in build ([b315ccb2](https://github.com/singularity-ui/core/commit/b315ccb2544653d853ff1fb1954e40a77b2de993))

# [2.0.0-alpha.14](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2021-11-17)


### Bug Fixes

* **build:** disable rollup modules preservation ([4f35bcb](https://github.com/singularity-ui/core/commit/4f35bcbfa25e0bebd81383acb4d71ba83c6e5bd9))

# [2.0.0-alpha.13](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2021-11-17)


### Bug Fixes

* **build:** split bundle & declarations emission ([73cb60e](https://github.com/singularity-ui/core/commit/73cb60e1212272f600123dcbc274be2d2c15638e))

# [2.0.0-alpha.12](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2021-11-17)


### Bug Fixes

* **build:** remove CSS imports from GlobalStyle declaration ([1cf7324](https://github.com/singularity-ui/core/commit/1cf7324f36123bd7a875300a06eeb7bf5df6e091))


### Features

* set body & html height in GlobalStyle ([40c3449](https://github.com/singularity-ui/core/commit/40c34496c1172bb480b6677ca74d6f912ce40ab3))

# [2.0.0-alpha.11](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2021-11-17)


### Features

* set body line-height in GlobalStyle ([194904d](https://github.com/singularity-ui/core/commit/194904d13a140e67fb9e60695727882f27a13f80))

# [2.0.0-alpha.10](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2021-11-16)


### Bug Fixes

* **contents:** replace react-pagination by internal one in Table ([0f8e4ad](https://github.com/singularity-ui/core/commit/0f8e4adeb58090ad688eff0a84f23ebc126c6bc4))

# [2.0.0-alpha.9](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2021-11-16)


### Bug Fixes

* **contents:** downgrade react-paginate to v7 for Table ([17a0d14](https://github.com/singularity-ui/core/commit/17a0d142aa2e3f8011eeb4bbda8345b8399837a8))

# [2.0.0-alpha.8](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2021-11-16)


### Bug Fixes

* **contents:** internalize react-paginate for Table ([7512ce0](https://github.com/singularity-ui/core/commit/7512ce0218eb8fe71f0d6cb97d43d0ac75bae247))

# [2.0.0-alpha.7](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2021-11-12)


### Bug Fixes

* **build:** fix styled-components imports to make them compatible with Next.js ([a5efe1f](https://github.com/singularity-ui/core/commit/a5efe1f5db89b5df15a92947fea5b7ed38edfbbc))

# [2.0.0-alpha.6](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2021-11-12)


### Features

* migrate to typescript with dist declarations ([205807f](https://github.com/singularity-ui/core/commit/205807fcbc7410f6cd80bce82b633788015c35f7))

# [2.0.0-alpha.5](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2021-11-11)


### Bug Fixes

* **icons:** add missing js ext for externalized import in Icon ([adfb0d1](https://github.com/singularity-ui/core/commit/adfb0d12d4785beb09cb755b10ea53b07a08cc0f))

# [2.0.0-alpha.4](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2021-11-11)


### Bug Fixes

* **rollup:** nake react-select/dist/react-select.cjs.js external ([d77fff5](https://github.com/singularity-ui/core/commit/d77fff5d634c77a0fab785adfd5f86daf872074c))

# [2.0.0-alpha.3](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2021-11-11)


### Bug Fixes

* **fields:** hack react-select/async import to make it ESM-compatible ([0657c0d](https://github.com/singularity-ui/core/commit/0657c0d85a31623bfcbde9ae50f459dee3f12227))
* **rollup:** exclude common/constants while building icons ([e356152](https://github.com/singularity-ui/core/commit/e3561526fc7679dbfb917fa8d7b2e21555963f49))

# [2.0.0-alpha.2](https://github.com/singularity-ui/core/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2021-11-11)


### Bug Fixes

* **build:** switch to named exports with preserved modules ([588fb3c](https://github.com/singularity-ui/core/commit/588fb3cc261f4939746018cbfa75f10f80d105c9))

# [2.0.0-alpha.1](https://github.com/singularity-ui/core/compare/v1.10.0...v2.0.0-alpha.1) (2021-11-11)


* build(rollup)!: migrate to ESM ([d85ad95](https://github.com/singularity-ui/core/commit/d85ad95b1537b724c00a3bf0c73f8386302024c9))


### BREAKING CHANGES

* This package will only be distributed as a JavaScript
module starting from version 3.0.0 and greater.

# [1.10.0](https://github.com/singularity-ui/core/compare/v1.9.0...v1.10.0) (2021-11-11)


### Bug Fixes

* **deps:** update dependency react-paginate to v8 ([f432e57](https://github.com/singularity-ui/core/commit/f432e5701e45f367c8b7ebc3b64315042c22982c))


### Features

* **icons:** add material icons ([c78903c](https://github.com/singularity-ui/core/commit/c78903cd4f8a0861ab5df98413d174a265a8df02))

# [1.9.0](https://github.com/singularity-ui/core/compare/v1.8.0...v1.9.0) (2021-11-04)


### Features

* **fields:** harmonize Checkbox screen height with Radio one ([1be9fcf](https://github.com/singularity-ui/core/commit/1be9fcf01acbec5ddda156a5bccdb54bb3569a27))

# [1.8.0](https://github.com/singularity-ui/core/compare/v1.7.0...v1.8.0) (2021-11-04)


### Bug Fixes

* **components:** remove useless onCancel Dialog prop ([5ec51a8](https://github.com/singularity-ui/core/commit/5ec51a84a0d6fc1a6b0d99b20f7843cda3e5b679))


### Features

* **fields:** set background color ([440ba08](https://github.com/singularity-ui/core/commit/440ba08d2a175f54e861cfbf8b82a3bcd4f035d7))

# [1.7.0](https://github.com/singularity-ui/core/compare/v1.6.0...v1.7.0) (2021-10-26)


### Features

* **components:** integrate overlay and window in Dialog ([a34af4b](https://github.com/singularity-ui/core/commit/a34af4ba7a4e43676c58ebac379d12cf2ab66666))

# [1.6.0](https://github.com/singularity-ui/core/compare/v1.5.1...v1.6.0) (2021-10-26)


### Features

* **components:** add Dialog ([6ae1c51](https://github.com/singularity-ui/core/commit/6ae1c510cf071e6e92c839c8278738e9b8a770ca))

## [1.5.1](https://github.com/singularity-ui/core/compare/v1.5.0...v1.5.1) (2021-10-24)


### Bug Fixes

* add missing styled-components ServerStyleSheet exposition ([ddc2668](https://github.com/singularity-ui/core/commit/ddc2668d4f5999bb8e7d06a6decd2bebb8d82b01))

# [1.5.0](https://github.com/singularity-ui/core/compare/v1.4.1...v1.5.0) (2021-10-24)


### Bug Fixes

* **fields:** add missing Radio index ([c0e8deb](https://github.com/singularity-ui/core/commit/c0e8deb494f37f0ad28710d82f3a028dab3f2e52))


### Features

* expose styled-components API ([0b62422](https://github.com/singularity-ui/core/commit/0b624228e5a04ad58904723c70998f6b16505259))

## [1.4.1](https://github.com/singularity-ui/core/compare/v1.4.0...v1.4.1) (2021-10-24)


### Bug Fixes

* **contents:** fix isId() check in Table cell ([3edec42](https://github.com/singularity-ui/core/commit/3edec4225a74ce59c681c7d096a6731cd72111ef))

# [1.4.0](https://github.com/singularity-ui/core/compare/v1.3.0...v1.4.0) (2021-10-24)


### Features

* **contents:** handle Mongo _id in Table ([3a831a0](https://github.com/singularity-ui/core/commit/3a831a02d2d5f75600a4f3b6dde7183857b820e6))

# [1.3.0](https://github.com/singularity-ui/core/compare/v1.2.0...v1.3.0) (2021-10-23)


### Bug Fixes

* **fields:** handle Checkbox empty string error ([e746a1d](https://github.com/singularity-ui/core/commit/e746a1d6c6ef0d04aa93a43acaf71f9b4eca9a59))
* **fields:** handle Radio empty string error ([e1d2f22](https://github.com/singularity-ui/core/commit/e1d2f22653610f6a59b40e658b16eac458c54c2b))
* **fields:** handle Select empty string error ([bb2ee64](https://github.com/singularity-ui/core/commit/bb2ee64609d21d3a6cba88f3f05cea098b9e52fc))
* **fields:** handle Textarea empty string error ([aab5466](https://github.com/singularity-ui/core/commit/aab54665f3f2060d5ec5b8f850533bef7604e99c))
* **fields:** handle TextInput empty string error ([2668372](https://github.com/singularity-ui/core/commit/26683728ba70795fdeebfc74e7705888b2127469))


### Features

* **contents:** add Table a11n focus foreground color ([f37e27c](https://github.com/singularity-ui/core/commit/f37e27c489646320b81118f3964c700e04c36355))
* **fields:** add Select focus color ([b313bfb](https://github.com/singularity-ui/core/commit/b313bfbd9144328ed6ad5bd6288a97f5feb73682))
* **fields:** add Textarea focus box shadow ([c37d636](https://github.com/singularity-ui/core/commit/c37d6369fda37c10d0b88a85d473610da4641740))
* **fields:** add TextInput focus box shadow ([eb0441f](https://github.com/singularity-ui/core/commit/eb0441fac693395ef3fd0b9ef0063e709d5707fa))

# [1.2.0](https://github.com/singularity-ui/core/compare/v1.1.0...v1.2.0) (2021-10-23)


### Bug Fixes

* **fields:** remove extraneous isMulti prop from Select ([98f8b39](https://github.com/singularity-ui/core/commit/98f8b39a595110ccc325a6d329eb59168e952192))


### Features

* **fields:** add label text ref to Checkbox ([b666708](https://github.com/singularity-ui/core/commit/b6667080c7f838848ddcd738d8dcf0d43f3a4de4))

# [1.1.0](https://github.com/singularity-ui/core/compare/v1.0.4...v1.1.0) (2021-10-23)


### Features

* **fields:** add Choice ([988d906](https://github.com/singularity-ui/core/commit/988d9068040bae982a80cf951795a0c8541429cf))

## [1.0.4](https://github.com/singularity-ui/core/compare/v1.0.3...v1.0.4) (2021-10-21)


### Bug Fixes

* **fields:** add right margin to Select tags ([e1ed45a](https://github.com/singularity-ui/core/commit/e1ed45a7b18532f16c5c1e37159ce054a5aeafc2))

## [1.0.3](https://github.com/singularity-ui/core/compare/v1.0.2...v1.0.3) (2021-10-18)


### Bug Fixes

* **contents:** handle Table data props update for null sortedKey case ([20bd67b](https://github.com/singularity-ui/core/commit/20bd67ba3d46afe138517ffef277c27a010c5ed7))

## [1.0.2](https://github.com/singularity-ui/core/compare/v1.0.1...v1.0.2) (2021-10-18)


### Bug Fixes

* **build:** move react-paginate to deps ([4df4205](https://github.com/singularity-ui/core/commit/4df4205e5ebfa1a3a3e6a95a8576c72eb4e27ae9))

## [1.0.1](https://github.com/singularity-ui/core/compare/v1.0.0...v1.0.1) (2021-10-18)


### Bug Fixes

* **build:** rollback to full CJS ([add55e5](https://github.com/singularity-ui/core/commit/add55e5cacfdeb33b058f467cee3f39eb52484d7))

# 1.0.0 (2021-10-17)


### Bug Fixes

* **build:** index Card ([70d8f33](https://github.com/singularity-ui/core/commit/70d8f3340a4c28e9dfe224883c4a65c9b33faf98))
* **build:** index Table and Tasker ([0477599](https://github.com/singularity-ui/core/commit/047759957e7e72cc111ace977470da1946200ed1))
* **build:** use named exports in index ([5042074](https://github.com/singularity-ui/core/commit/5042074d02d8a2aebe3a416c62d40c6140f1aadf))
* **common:** shape all theme sub-objects in prop types ([7f201ff](https://github.com/singularity-ui/core/commit/7f201ff2704e21cdc0efd75560458db47f838e5d))
* **contents:** force Table action icon svg size at parent level ([a738fbc](https://github.com/singularity-ui/core/commit/a738fbcc2ad1372113cb888b145b596d5fd0f2f8))
* **contents:** handle Table data & sorting props update ([68f2f66](https://github.com/singularity-ui/core/commit/68f2f66a7c7230da2d3dc5466d43c88d63c13752))
* **contents:** remove floating bracket in CSS ([4164da7](https://github.com/singularity-ui/core/commit/4164da7fe4626c39f051a9ee22db9f2f9bb8788d))
* **fields:** remove Select options prop ([f14624d](https://github.com/singularity-ui/core/commit/f14624d787ead058ea1936fc41c4c0223aeb7ca5))


### Features

* **contents:** add Table ([1f55786](https://github.com/singularity-ui/core/commit/1f5578602277b6fbc339b0ff435bc7792c577c36))
* **contents:** add Table bottom border ([7f42b49](https://github.com/singularity-ui/core/commit/7f42b491de05a5da1c697363512d1a38a69a4850))
* **contents:** add Table icon cells tooltip ([74eecc9](https://github.com/singularity-ui/core/commit/74eecc9c8b4edf5e04580c206342c8562a9fb969))
* **contents:** add Table pagination ([12be93e](https://github.com/singularity-ui/core/commit/12be93e9979353e952e2b9da8c2e15ca06682a23))
* **contents:** add Table pagination rounded borders ([af61f61](https://github.com/singularity-ui/core/commit/af61f61b58a4cf85bb1d9e8afc823224509a1205))
* **contents:** add Table sorting ([956275b](https://github.com/singularity-ui/core/commit/956275be8de9281e86c71332bd5a0d04616179db))
* **contents:** add Tasker ([eb54f6d](https://github.com/singularity-ui/core/commit/eb54f6d58ef2ff9ec66716ab581ac87261f397df))
* **contents:** add toggle type in Table columns ([2c539a6](https://github.com/singularity-ui/core/commit/2c539a659f3951b7b771870d4f6c61de88f8d106))
* **contents:** handle nested key in Table data ([0f398a0](https://github.com/singularity-ui/core/commit/0f398a0ac7fc8b9c5ceb2e5e035f95c93c10a74e))
* **contents:** handle Table boolean type ([3bd362b](https://github.com/singularity-ui/core/commit/3bd362bf80bfdc1ed17912a050733e785ae3c033))
* **demo:** bootstrap ([6af8d9d](https://github.com/singularity-ui/core/commit/6af8d9d67b8d911f9536be1d6bb64fb3c7f31179))
* **elements:** add Button ([6a9bdaa](https://github.com/singularity-ui/core/commit/6a9bdaa7c8b3fed4b0202a6558ef806f21635328))
* **elements:** add Card ([a6d8910](https://github.com/singularity-ui/core/commit/a6d8910d622bcb87263e343bfec302d95bef3f84))
* **fields:** add async Select mode ([925bcc2](https://github.com/singularity-ui/core/commit/925bcc2d7984c78688cde4a1557fac2cb3ae6704))
* **fields:** add async Select mode ([7955987](https://github.com/singularity-ui/core/commit/7955987db92041e648a8239b4cd109e3125933ce))
* **fields:** add async Select mode ([c7dd83c](https://github.com/singularity-ui/core/commit/c7dd83cd9ed5754a007269f4a8578c51f454664f))
* **fields:** add Checkbox ([bd41280](https://github.com/singularity-ui/core/commit/bd41280b7fd215b1236a2d6fcb46f9c864323fdf))
* **fields:** add Select ([1da7579](https://github.com/singularity-ui/core/commit/1da7579e196928333d9a6def788291912b81aa8f))
* **fields:** add text cursor to Select ([c5fd880](https://github.com/singularity-ui/core/commit/c5fd880d303bb34e00902b00a492db9688c283b9))
* **fields:** add Textarea ([215b780](https://github.com/singularity-ui/core/commit/215b7802cd2f27ffa97e371c1b5acc17e8d692f1))
* **fields:** add TextInput ([3d2ddb5](https://github.com/singularity-ui/core/commit/3d2ddb58baab0d8c0e805f86960d0b9d6a687e49))
