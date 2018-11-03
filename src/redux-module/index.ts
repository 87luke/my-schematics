import {
    Rule,
    Tree,
    SchematicContext,
    SchematicsException,
    apply,
    mergeWith,
    template,
    url,
    move,
    branchAndMerge,
    chain,
    filter
} from "@angular-devkit/schematics";
import { dasherize, classify, camelize } from "@angular-devkit/core/src/utils/strings";
import { normalize } from '@angular-devkit/core';
import { addDeclarationToNgModule, addDeclarationToAppState } from '../utils/ng-module-utils';
import { findModuleFromOptions } from '../schematics-angular-utils/find-module';

import { ReduxModuleSchema } from "./schema";



function lowerCase(text: string): string {
    if (text) {
        return text.toLowerCase();
    }
    return text;
}

function upperCase(text: string): string {
    if (text) {
        return text.toUpperCase();
    }
    return text;
}

function variabilify(text: string): string {
    // TODO sanificare il testo per evitare caratteri speciali nel nome delle variabili
    return text;
}

function createSelector(text: string): string {
    return 'app-' + text + '-component';
}

function filterTemplates(options: ReduxModuleSchema): Rule {
    console.log(options);
    return filter(path => !path.match(/\.bak$/));
}

const stringUtils = { dasherize, classify, camelize, lowerCase, upperCase, variabilify, createSelector };

export default function(options: ReduxModuleSchema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        /** options.path = options.path ? normalize(options.path) : options.path; */
        /** options.module = options.module || findModuleFromOptions(host, options) || ''; */

        const yaml = require("js-yaml");

        const buffer = tree.read(options.config);
        const model = yaml.load(buffer);
        const name = options.name;

        if (model === null) {
            throw new SchematicsException(`Model file ${options.config} does not exist.`);
        }

        const templateSource = apply(url("./files"), [
            /*** filterTemplates(options), */
            template({
                ...model,
                name,
                ...stringUtils
            }),
            move(`src/app`)
        ]);


        const rule = chain([
            branchAndMerge(chain([
                mergeWith(templateSource),
                /** addDeclarationToNgModule(options, options.export) */
                /** addDeclarationToAppState(options, options.export) */
            ])),
        ]);
        return rule(tree, context);
    };
}