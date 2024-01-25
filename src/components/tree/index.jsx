import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'ADMIN',
    children: [
      {
        name: 'RSM',
        children: [
          { 
            name: 'ZSE',
            children: [
                {
                    name: 'SEC',
                    children: [
                        {
                            name: 'ZSM',
                            children: [
                                {
                                    name: 'RSO',
                                    children: [
                                        {
                                            name: 'ASE',
                                            children: [
                                                {
                                                    name: 'ABM',
                                                    children: [
                                                        {
                                                            name: 'BSM',
                                                            children: [
                                                                {
                                                                    name: 'ABM',
                                                                    children: [
                                                                        {
                                                                            name: 'TSE'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },  
    ],
},
],
},
];

const HierarchyChart = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Tree data={myTreeData} orientation="vertical" />
    </div>
  );
};

export default HierarchyChart;
