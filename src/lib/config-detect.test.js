import fs from 'fs';
import path from 'path';

import configDetect from './config-detect';

describe('config-detect', ()=> {
  
  it('should return the path when found .wbootrc',() => {
    const parentFolder = path.resolve('..');
    sinon.stub(fs,'existsSync').withArgs(`${parentFolder}/.wbootrc`).returns(true);
    expect(configDetect(path.resolve('./'))).to.equal(`${parentFolder}/.wbootrc`);
  });
  
  it('should return undefined when there is no .wbootrc found', () => {
    expect(configDetect(path.resolve('./'))).to.be.undefined;
  });
});