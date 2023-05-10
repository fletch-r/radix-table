import './SimpleTable.css';

import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import * as Table from '../Table';
import RowDensity from '../RowDensity';
import Select from "../Select";

/**
 *  Table with advance features
 */
export default function SimpleTable() {
    const [hasScrolled, setHasScrolled] = React.useState<{ top: number; left: number; }>({ top: 0, left: 0 });
    const [selectedRowDensity, setSelectedRowDensity] = React.useState<'compact' | 'default' | 'comfortable'>('default');

    const [rowsPerPage, setRowsPerPage] = React.useState("10");

    const createResizableColumn = (col: any, resizer: any) => {
        // Track the current position of mouse
        let x = 0;
        let w = 0;
    
        const mouseDownHandler = (e: any) => {
            // Get the current mouse position
            x = e.clientX;
    
            // Calculate the current width of column
            const styles = window.getComputedStyle(col);
            w = parseInt(styles.width, 10);
    
            // Attach listeners for document's events
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
            resizer.classList.add('resizing');
        };
    
        const mouseMoveHandler = (e: any) => {
            // Determine how far the mouse has been moved
            const dx = e.clientX - x;

            // const existingClassNames = col.className.split(' ').filter((str: string) => !str.includes('w-')).join(' ');
    
            // // Update the width of column
            col.style.width = `${w + dx}px`;
            // col.className = `${existingClassNames} w-[${w + dx}px]`;
        };
    
        // When user releases the mouse, remove the existing event listeners
        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
            resizer.classList.remove('resizing');
        };

        const doubleClickHandler = () => {
            col.style.width = "max-content";
        };
    
        resizer.addEventListener('mousedown', mouseDownHandler);
        resizer.addEventListener('dblclick', doubleClickHandler);
    };

    React.useEffect(() => {
        // Query the table
        // const table = document.getElementById('resizeMe-0')!;
        const th = document.getElementById('thSize')!;

        // Query all headers
        const cols = document.querySelectorAll('th');

        // Loop over them
        [].forEach.call(cols, (col: any) => {
            // Create a resizer element
            const resizer = document.createElement('div');
            resizer.classList.add('resizer');

            // Set the height
            resizer.style.height = `${th.offsetHeight}px`;

            // Add a resizer element to the column
            col.appendChild(resizer);

            // Will be implemented in the next section
            createResizableColumn(col, resizer);
        });
    }, []);

    const example_rows = Array(Number(rowsPerPage)).fill({
        Invoice: 'INV-0001',
        Created: 'Aug 12, 2018',
        Status: 'Outstanding',
        Customer: 'AC Accounting',
        Due: 'Sept 12, 2018',
        Service: 'UI Design',
        Worked: '10 hrs',
        Rate: '$100/hr',
        Total: '$1,000'
    });
    
    return (
        <div className="p-4 overflow-hidden border rounded-lg w-max">
            <div className="flex justify-end w-full mb-2">
                <div>
                    <RowDensity onChange={setSelectedRowDensity} />
                </div>
            </div>
            <div
                className="mb-4 overflow-auto border rounded resizeContainer w-max"
                onScroll={(e) => setHasScrolled({ top: (e.target as HTMLInputElement).scrollTop, left: (e.target as HTMLInputElement).scrollLeft })}
            >
                <Table.Root>
                    <Table.Header className={hasScrolled.top > 0 ? 'shadow-md' : ''}>
                        <Table.Row className="divide-x">
                            <Table.HeaderCell density={selectedRowDensity} id="thSize" className="sticky left-0 z-10 bg-white">
                                <Checkbox />
                            </Table.HeaderCell>
                            {Object.keys(example_rows[0]).map((str: string, index: number) => index === 0 ? (
                                <Table.HeaderCell
                                    key={str}
                                    density={selectedRowDensity}
                                    className={`sticky z-10 bg-white left-9 ${hasScrolled.left > 0 ? 'shadow-[10px_0px_6px_-1px_rgb(0,0,0,0.1),_5px_0px_4px_-2px_rgb(0,0,0,0.1)]' : ''}`}
                                >
                                    {str}
                                </Table.HeaderCell>
                            ) : (
                                <Table.HeaderCell key={str} density={selectedRowDensity}>
                                    {str}
                                </Table.HeaderCell>
                            ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {example_rows.map((obj, index) => (
                            <Table.Row key={index} className="even:bg-neutral-100">
                                <Table.DataCell density={selectedRowDensity} className={`sticky left-0 z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-100'} w-9`}>
                                    <Checkbox />
                                </Table.DataCell>
                                {Object.values(obj).map((value: any, i: number) => i === 0 ? (
                                    <Table.DataCell
                                        key={value}
                                        density={selectedRowDensity}
                                        className={`sticky left-9 z-10 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-100'} ${hasScrolled.left > 0 ? 'shadow-[10px_0px_6px_-1px_rgb(0,0,0,0.1),_5px_0px_4px_-2px_rgb(0,0,0,0.1)]' : ''}`}
                                    >
                                        {value}
                                    </Table.DataCell>
                                ) : (
                                    <Table.DataCell key={value} density={selectedRowDensity}>
                                        {value}
                                    </Table.DataCell>
                                ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-sm">Rows per page:</p>
                <Select onChange={(value: string) => setRowsPerPage(value)} />
            </div>
        </div>
    );
}