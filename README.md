# Rust Warm Cache Action

A GitHub Action that keeps a warm cache for large Rust projects.

Once configured properly, [`actions/cache@v3`](https://github.com/actions/cache) should never handout a cold cache for any of the CI jobs.

This action differentiates [`Swatinem/rust-cache`](https://github.com/Swatinem/rust-cache) by:
* this caches workspace crates because they still take a significant amount of time to build. [`Swatinem/rust-cache` does not cache workspace crates](https://github.com/Swatinem/rust-cache/issues/37#issuecomment-944697938).
* controls the size of the cache so it does not reach a few Gigabytes if the builds are frequent
