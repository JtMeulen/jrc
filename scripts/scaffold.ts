const fs = require("fs");

const COMPONENT_NAME = process.argv.slice(2)[0];
const COMPONENTS_DIR = `./src/components/`;

const writeFile = (dir: string, content: string): void =>  {
  console.log("Writing file: ", dir);
  fs.writeFile(dir, content, (err: any) => {
    if (err) {
      console.log(err);
      // rm -rf folder?
      // process.exit(1);
    }
  });
}

if(!COMPONENT_NAME) {
  console.error(`ERROR: A component name must be specified, e.g. "yarn new Button"`);
  process.exit(1);
}

if (fs.existsSync(COMPONENTS_DIR + COMPONENT_NAME)) {
  console.error(`ERROR: A component with name: ${COMPONENT_NAME} already exists.`);
  process.exit(1);
}

const COMP_LOWERCASE = COMPONENT_NAME.toLowerCase();
const COMP_CAPITALIZED = COMP_LOWERCASE.charAt(0).toUpperCase() + COMP_LOWERCASE.slice(1);
const NEW_COMP_DIR = COMPONENTS_DIR + COMP_CAPITALIZED;

console.log(`Building component scaffold for ${COMP_CAPITALIZED} at ${NEW_COMP_DIR}`);

fs.mkdirSync(NEW_COMP_DIR);

// Main index file
writeFile(`${NEW_COMP_DIR}/_index.ts`, `export { default } from "./${COMP_CAPITALIZED}";`);

// Component file
writeFile(`${NEW_COMP_DIR}/${COMP_CAPITALIZED}.tsx`,
`import React from "react";
import cn from "classnames";
import "./${COMP_CAPITALIZED}.scss";

interface ${COMP_CAPITALIZED}Props {
}

const ${COMP_CAPITALIZED}: React.FC<${COMP_CAPITALIZED}Props> = ({}) => {
  return (
    <div className={cn("${COMP_LOWERCASE}")}></div>
  );
};

export default ${COMP_CAPITALIZED};
`);

// Test file
writeFile(`${NEW_COMP_DIR}/${COMP_CAPITALIZED}.test.tsx`,
`import React from "react";
import { render } from "@testing-library/react";

import ${COMP_CAPITALIZED} from "./${COMP_CAPITALIZED}";

describe("${COMP_CAPITALIZED}", () => {
  test("renders without error", () => {
    const { container } = render(<${COMP_CAPITALIZED} />);
    expect(true).toEqual(true);
  });
});
`);

// Storybook file
writeFile(`${NEW_COMP_DIR}/${COMP_CAPITALIZED}.stories.tsx`,
`import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ${COMP_CAPITALIZED} from "./${COMP_CAPITALIZED}";

export default {
  title: "Components/${COMP_CAPITALIZED}",
  component: ${COMP_CAPITALIZED}
} as Meta<typeof ${COMP_CAPITALIZED}>;

const Template: StoryFn<typeof ${COMP_CAPITALIZED}> = (args) => <${COMP_CAPITALIZED} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`);

// Scss file
writeFile(`${NEW_COMP_DIR}/${COMP_CAPITALIZED}.scss`,
`@use '../../style/lib.scss' as *;
@use '../../style/mixins.scss';

.${COMP_LOWERCASE} {
  @include mixins.font-family();
}
`);

// Add to components index for bundling
fs.appendFileSync(COMPONENTS_DIR + 'index.ts', `\nexport { default as ${COMP_CAPITALIZED} } from "./${COMP_CAPITALIZED}/_index";`);
