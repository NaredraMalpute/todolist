import React, { useState, useEffect } from "react";
import { PaginationContainer } from "./Pagination.style";

interface IPagination {
	count: number;
	onChange: (newPage: number) => void;
	pageSize?: number;
	pageNoSize?: number;
}

const PaginationBox = ({
	count,
	onChange,
	pageSize = 10,
	pageNoSize = 1,
}: IPagination) => {
	const [pageNumber, setPageNumber] = useState(pageNoSize);
	useEffect(() => {
		setPageNumber(pageNoSize);
	}, [pageNoSize]);

	const TransFormCount = (val: any) => {
		let totalPages = 0;
		if (typeof val === "number") {
			totalPages = Math.ceil(count / pageSize);
		}
		return totalPages;
	};

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		newPage: number
	) => {
		setPageNumber(newPage);
		onChange(newPage);
	};

	return (
		<PaginationContainer
			className="pagination"
			currentSelected={false}
			count={TransFormCount(count)}
			page={pageNumber}
			variant="outlined"
			shape="rounded"
			onChange={handlePageChange}
		/>
	);
};

export default PaginationBox;
