import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {CarForm, Cars} from '../../components';

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    CarPage
}