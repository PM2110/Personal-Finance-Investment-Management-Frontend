import { FamilyMemberData } from "../../../redux/familyMemberSlice";

export interface FamilyTreeNode {
    name: string,
    attributes: { relation: string },
    children: FamilyTreeNode[],
    parent: FamilyTreeNode | null,
}

export const buildFamilyTree = (members: FamilyMemberData[], idUser: { [key: number]: string }, createdByID: number): FamilyTreeNode | null => {
    const memberMap: { [key: number]: FamilyTreeNode } = {};

    members.forEach((member) => {
        memberMap[member.user2] = {
            name: idUser[member.user2],
            attributes: { relation: member.relationType },
            children: [],
            parent: null,
        };
    });

    const root: FamilyTreeNode = {
        name: idUser[createdByID],
        attributes: { relation: "Admin" },
        children: [],
        parent: null,
    };

    members.forEach((member) => {
        if (member.relationType === "Son" || member.relationType === "Daughter") {
            const parent = member.user1 === createdByID ? root : memberMap[member.user1];
            if (parent) {
                parent.children.push(memberMap[member.user2]);
                memberMap[member.user2].parent = parent;
            }
        } else if (member.relationType === "Father" || member.relationType === "Mother") {
            const parent = member.user2 === createdByID ? root : memberMap[member.user2];
            if (parent) {
                parent.children.push(memberMap[member.user1]);
                memberMap[member.user1].parent = parent;
            }
        } else if (member.relationType === "Brother" || member.relationType === "Sister") {
            const parent = memberMap[member.user1]?.parent?.name === root.name ? root : memberMap[member.user1].parent;
            if (member.relationType === "Brother") {
                memberMap[member.user2].attributes.relation = "Son";
            } else {
                memberMap[member.user2].attributes.relation = "Daughter";
            }
            if (parent) {
                parent.children.push(memberMap[member.user2]);
                memberMap[member.user2].parent = parent;
            }
        } 
    });

    return root;
};