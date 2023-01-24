import React from "react";
import { stopPropagation } from "./stopPropagation";
import { preventDefault } from "./preventDefault";

function NotStandartLink(props: any) {
    return (
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    );
}
