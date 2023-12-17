import React from "react";
import styled from "styled-components";

interface PanelProps {
    width: number;
}

interface SplitScreenProps {
    children: React.ReactNode;
    leftWidth?: number;
    rightWidth?: number;
}

const Container = styled.div`
    display: flex;
`;

const Panel = styled.div<PanelProps>`
    flex: ${props => props.width * 100}%;
`;


export const SplitScreen: React.FC<SplitScreenProps> = ({
    children,
    leftWidth = 1,
    rightWidth = 1,
}) => {
    const childrenArray = React.Children.toArray(children);
    const [left, right] = childrenArray;
    return (
        <Container>
            <Panel width={leftWidth}>
               {left}
            </Panel>
            <Panel width={rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}