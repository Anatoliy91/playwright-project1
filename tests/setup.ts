import { test as base } from '@playwright/test';

type Theme = 'light' | 'dark';

interface TestOptions {
  theme?: Theme;
}

const test = base.extend<TestOptions>({
  theme: [undefined, { option: true }],
});

export default test;
