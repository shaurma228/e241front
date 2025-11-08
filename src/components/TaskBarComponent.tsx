import React from "react"

import { TaskBar, List } from "@react95/core"
import {
    Computer3,
    MsDos
} from "@react95/icons"

function TaskBarComponent() {
    return (
        <TaskBar
            list = {
                <List>
                    <List.Item icon={<MsDos variant="32x32_32" />}>
                        MS-DOS Prompt
                    </List.Item>
                    <List.Divider />
                    <List.Item icon={<Computer3 variant="32x32_4" />}>
                        Shut Down...
                    </List.Item>
                </List>
            }
        />
    )
}

export default TaskBarComponent