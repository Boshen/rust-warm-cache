import path from "path";
import * as core from "@actions/core";
import * as cache from "@actions/cache";

async function main() {
	if (!cache.isFeatureAvailable()) {
		core.warning("Cache is not available");
		return;
	}

	const paths: string[] = [path.resolve("target")];
	const key = "v0-warm-main";
	await cache.saveCache(paths, key);
}

main();
