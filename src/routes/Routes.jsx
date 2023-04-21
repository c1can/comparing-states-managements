import { Route, Switch } from "wouter";
import { Edit } from "../components/Reducer/Edit";
import { ReduxComponent } from "../components/Redux Toolkit/Redux";
import { ZustandComponent } from "../components/Zustand/Zustand";
import { ReducerContextProvider } from "../Context/Reducer/ReducerContext";
import { Home } from "../components/Home";
import { Provider } from "react-redux";
import { store, persistor } from "../Redux /store";
import { EditReduxTask } from "../components/Redux Toolkit/Edit";
import { PersistGate } from "redux-persist/integration/react";
import { EditZustand } from "../components/Zustand/Edit";

export function Routes() {
    return (
        <>
            <ReducerContextProvider>
                <Route path="/" component={Home}></Route>
                <Route path="/edit-reducer/:id">{params => <Edit param={params} />}</Route>
            </ReducerContextProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Route path="/redux" component={ReduxComponent}></Route>
                    <Route path="/edit-redux/:id">{params => <EditReduxTask param={params} />}</Route>
                </PersistGate>
            </Provider>
            <Route path="/zustand" component={ZustandComponent}></Route>
            <Route path="/edit-zustand/:id">{params => <EditZustand param={params} />}</Route>
        </>
    )
}