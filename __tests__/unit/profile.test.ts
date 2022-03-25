// @ts-ignore
import { ProfileModel } from '@contexts/profile/profile.model';

test('Should allow path alias', () => {
  const model = new ProfileModel();
  expect(model).toBeDefined();
})