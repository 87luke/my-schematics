import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app-state";

import {
<% for(let i = 0; i < actions.length; i++) {  if(actions[i] && actions[i].type) { %><%= lowerCase(actions[i].type) %>,
<% } } %>
} from "./<%=dasherize(name)%>.actions";

@Component({
  selector: '[<%=createSelector(name)%>]',
  templateUrl: './<%=dasherize(name)%>.component.html',
  styleUrls: ['./<%=dasherize(name)%>.component.scss']
})
export class <%=classify(name)%>Component {
    <%= lowerCase(name) %>$; // variable$ mean that is a observable

	constructor(private store: Store<AppState>){

		this.<%= lowerCase(name) %>$ = this.store.select((state) => {
			return state.<%= lowerCase(name) %>.data;
		})
	}

    <% for(let i = 0; i < actions.length; i++) { if(actions[i] && actions[i].type) { %>
	<%= lowerCase(actions[i].type) %>(/** Add data if necessary */) {
    	this.store.dispatch(<%= lowerCase(actions[i].type) %>(/** Add data if necessary */))
	}
    <% } } %>
}
