import React from "react";
import Tree from "react-d3-tree";
import { FamilyTreeNode } from "./BuildFamilyTree";

interface FamilyTreeProps {
    data: FamilyTreeNode;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ data }) => {
    const treeData = [data];

    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Tree data={treeData} orientation="vertical" />
        </div>
    );
};

export default FamilyTree;