const packageJson = require('../../package.json');

export const environment = {
  appName: 'AngularSkeletonNgrx',
  envName: 'PROD',
  production: true,
  test: false,
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    material: packageJson.dependencies['@angular/material'],
    flexLayout: packageJson.dependencies['@angular/flex-layout'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    toastr: packageJson.dependencies['ngx-toastr'],
    ngrx: packageJson.dependencies['@ngrx/store']
  }
};
