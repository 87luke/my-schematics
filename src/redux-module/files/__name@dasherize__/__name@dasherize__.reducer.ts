import {
	<% for(let i = 0; i < actions.length; i++) { %><%= upperCase(actions[i].type) %>,
	<% } %>
} from "./<%=dasherize(name)%>.constants";

export function <%= classify(name) %>Reducer (state = 0, action) {

	switch(action.type) {
        <% for(let i = 0; i < actions.length; i++) { %>
		case <%= upperCase(actions[i].type) %>:
			// TODO implement <%= upperCase(actions[i].type)%> action
			return state;
        <% } %>
		default:
			return state;
	}

}
