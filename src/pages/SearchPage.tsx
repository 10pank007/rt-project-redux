import React, {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {
}

const SearchPage: FC<IProps> = () => {
    return (
        <div>
            SearchPage
        </div>
    );
};

export {SearchPage};