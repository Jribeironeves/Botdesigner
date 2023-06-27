/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TreeItem, TreeView } from "@mui/lab";
import {
  Container,
  useStyles,
  FlowChartLine,
  StyledArrowDropDownIcon,
  StyledArrowRightIcon,
  ContainerNode,
  StartIcon,
  ChildNodeIcon,
  NodeText,
  DeleteButton,
  AddButton,
  StyledSendIcon,
} from "./styles";

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  locked?: boolean;
  expanded?: boolean;
}

const initialTree: TreeNode = {
  id: "start",
  label: "Start",
  children: [
    {
      id: "node1",
      label: "start-1",
      children: [
        {
          id: "node1-1",
          label: "start-1-1",
          children: [
            {
              id: "node1-1-1",
              label: "start-1-1-1",
            },
          ],
        },
      ],
    },
    {
      id: "node2",
      label: "start-2",
      children: [
        {
          id: "node2-1",
          label: "start-2-1",
        },
      ],
    },
  ],
  expanded: true,
};

export const Tree = () => {
  const classes = useStyles();
  const [treeData, setTreeData] = useState<TreeNode>(initialTree);

  const handleNodeMove = (nodeId: string, targetId: string) => {
    const updatedTree = { ...treeData };

    const findNode = (node: TreeNode, id: string): TreeNode | undefined => {
      if (node.id === id) {
        return node;
      }

      if (node.children) {
        for (const child of node.children) {
          const foundNode = findNode(child, id);
          if (foundNode) {
            return foundNode;
          }
        }
      }

      return undefined;
    };

    const nodeToMove = findNode(updatedTree, nodeId);
    const targetNode = findNode(updatedTree, targetId);

    if (nodeToMove && targetNode) {
      if (nodeToMove.locked) {
        return;
      }

      const parentNode = findParentNode(updatedTree, nodeId);
      if (parentNode) {
        parentNode.children = parentNode.children?.filter(
          (child) => child.id !== nodeId
        );
      } else {
        updatedTree.children = updatedTree.children?.filter(
          (child) => child.id !== nodeId
        );
      }

      targetNode.children = targetNode.children || [];
      targetNode.children.push(nodeToMove);
    }

    setTreeData(updatedTree);
  };

  const findParentNode = (
    node: TreeNode,
    targetId: string
  ): TreeNode | undefined => {
    if (node.children) {
      for (const child of node.children) {
        if (child.id === targetId) {
          return node;
        }

        const parentNode = findParentNode(child, targetId);
        if (parentNode) {
          return parentNode;
        }
      }
    }

    return undefined;
  };

  const handleAddNode = (parentId: string) => {
    const updatedTree = { ...treeData };

    const findParentNode = (
      node: TreeNode,
      targetId: string
    ): TreeNode | undefined => {
      if (node.id === targetId) {
        return node;
      }

      if (node.children) {
        for (const child of node.children) {
          const parentNode = findParentNode(child, targetId);
          if (parentNode) {
            return parentNode;
          }
        }
      }

      return undefined;
    };

    const parentNode = findParentNode(updatedTree, parentId);
    if (parentNode) {
      parentNode.children = parentNode.children || [];
      const newNodeId = `${parentId}-${parentNode.children.length + 1}`;
      parentNode.children.push({
        id: newNodeId,
        label: `${newNodeId}`,
      });
    }

    setTreeData(updatedTree);
  };

  const handleDeleteNode = (nodeId: string) => {
    const updatedTree = { ...treeData };

    const deleteNode = (node: TreeNode, id: string): boolean => {
      if (node.children) {
        const index = node.children.findIndex((child) => child.id === id);
        if (index !== -1) {
          node.children.splice(index, 1);
          return true;
        }

        for (const child of node.children) {
          if (deleteNode(child, id)) {
            return true;
          }
        }
      }

      return false;
    };

    deleteNode(updatedTree, nodeId);
    setTreeData(updatedTree);
  };

  const handleToggleNode = (nodeId: string) => {
    const updatedTree = { ...treeData };

    const findNode = (node: TreeNode, id: string): TreeNode | undefined => {
      if (node.id === id) {
        return node;
      }

      if (node.children) {
        for (const child of node.children) {
          const foundNode = findNode(child, id);
          if (foundNode) {
            return foundNode;
          }
        }
      }

      return undefined;
    };

    const nodeToToggle = findNode(updatedTree, nodeId);
    if (nodeToToggle) {
      nodeToToggle.expanded = !nodeToToggle.expanded;
    }

    setTreeData(updatedTree);
  };

  const renderTree = (nodes: TreeNode) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        nodes.id === "start" ? (
          <StartIcon>
            <span>Start</span>
          </StartIcon>
        ) : (
          <ContainerNode>
            <ChildNodeIcon>
              <StyledSendIcon />
            </ChildNodeIcon>
            <NodeText>{nodes.label}</NodeText>
            {!nodes.locked && (
              <DeleteButton onClick={() => handleDeleteNode(nodes.id)} />
            )}
          </ContainerNode>
        )
      }
      onClick={() => handleToggleNode(nodes.id)}
      style={{ position: "relative" }}
      TransitionProps={{ timeout: 0 }}
      collapseIcon={<StyledArrowDropDownIcon />}
      expandIcon={<StyledArrowRightIcon />}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => (
            <>
              <FlowChartLine />
              {renderTree(node)}
            </>
          ))
        : null}
      {!nodes.locked && <AddButton onClick={() => handleAddNode(nodes.id)} />}
    </TreeItem>
  );

  return (
    <div className={`${classes.root} `}>
      <Container>
        <TreeView
          defaultCollapseIcon={<StyledArrowDropDownIcon />}
          defaultExpandIcon={<StyledArrowRightIcon />}
          onDragOver={(event: any) => event.preventDefault()}
          onDrop={(event: any) =>
            handleNodeMove(
              event.dataTransfer.getData("nodeId"),
              event.currentTarget.id
            )
          }
        >
          {renderTree(treeData)}
        </TreeView>
      </Container>
    </div>
  );
};
