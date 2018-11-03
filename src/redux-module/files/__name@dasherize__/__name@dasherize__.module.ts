import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    Action,
    ActionReducerMap,
    StoreModule
} from '@ngrx/store';

import { <%= classify(name) %>Component } from './<%=dasherize(name)%>.component';
import { <%= classify(name) %>Reducer } from './<%=dasherize(name)%>.reducer';

export interface <%= classify(name) %>State {
	data: number
}

const reducers: ActionReducerMap<<%= classify(name) %>State> =  {
	data: <%= classify(name) %>Reducer
};

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature<<%= classify(name) %>State, Action>('<%= lowerCase(name) %>', reducers)
    ],
    declarations: [<%=classify(name)%>Component],
    exports:[<%=classify(name)%>Component],
})
export class <%=classify(name)%>Module { }
