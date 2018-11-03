export interface ReduxModuleSchema {
    name: string;
    config: string;
}

export interface ActionSchema {
    type: string;
}

export interface ConfigSchema {
    action: ActionSchema[];
}

