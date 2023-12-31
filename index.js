#!/usr/bin/env node

const fs = require('fs');

const text = `# EditorConfig helps developers define and maintain consistent
# coding styles between different editors or IDEs
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
`;

// Path: .editorconfig
fs.writeFileSync('.editorconfig', text);