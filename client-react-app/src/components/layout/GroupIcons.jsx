import styled from 'styled-components';

const GroupIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.justifyContent };
    align-items: center;
    > * {
        margin-top: ${ props => props.margin }px;
        cursor: pointer;
    }
`;

GroupIcons.defaultProps = { margin: 0, justifyContent: 'flex-start' };

export default GroupIcons;