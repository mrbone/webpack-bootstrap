import fs from 'fs';
import path from 'path';

export const configDetect = function(initCwd) {
  let targetCwd = initCwd;
  let configPath;
  
  while(targetCwd !== '/'){
    const fileConfigPath = path.resolve(targetCwd,'.wbootrc');
    
    if(fs.existsSync(fileConfigPath)){
      configPath = fileConfigPath;
      break;
    }
    else {
      targetCwd = path.resolve(targetCwd,'..');
    }
  }
  return configPath;
}

export default configDetect;