import fs from "node:fs";

const releases = [
  {
    key: "modern",
    label: "Chrome 114 و جدیدتر",
    file: "public/downloads/raja-assistant-v0.4.11-basic-release.zip",
  },
  {
    key: "legacy",
    label: "Chrome 109 تا 113",
    file: "public/downloads/raja-assistant-v0.4.11-chrome109-legacy.zip",
  },
];

function formatDate(date) {
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat("fa-IR", {
    timeZone: "Asia/Tehran",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

const metadata = {};

for (const release of releases) {
  if (!fs.existsSync(release.file)) {
    throw new Error(`Release file not found: ${release.file}`);
  }

  const date = fs.statSync(release.file).mtime;

  metadata[release.key] = {
    label: release.label,
    date: formatDate(date),
    time: formatTime(date),
    file: release.file.replace("public", ""),
  };
}

const output = `export const releaseMetadata = ${JSON.stringify(metadata, null, 2)} as const;\n`;

fs.writeFileSync("app/release-metadata.ts", output);

console.log("Release dates updated:");
for (const [key, value] of Object.entries(metadata)) {
  console.log(`${key}: ${value.date} - ${value.time}`);
}
