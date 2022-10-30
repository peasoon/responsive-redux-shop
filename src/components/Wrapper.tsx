import * as React from 'react';

interface IWrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({children}) => {
	return <div className="desctop:container mx-auto px-[20px]">
		{children}
	</div>;
};

export default Wrapper;
