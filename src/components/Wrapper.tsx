import * as React from 'react';

interface IWrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({children}) => {
	return <div className="max-w-[1210px] mx-auto px-[20px]">
		{children}
	</div>;
};

export default Wrapper;
