/**
 * Below Class ensures that CoreModule is only loaded once into the AppModule.
 */

export class EnsureModuleLoadedOnceGuard {
    constructor(targetModule: any) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}
