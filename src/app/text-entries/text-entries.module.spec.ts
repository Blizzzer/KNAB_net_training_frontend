import { TextEntriesModule } from './text-entries.module';

describe('TextEntriesModule', () => {
  let textEntriesModule: TextEntriesModule;

  beforeEach(() => {
    textEntriesModule = new TextEntriesModule();
  });

  it('should create an instance', () => {
    expect(textEntriesModule).toBeTruthy();
  });
});
