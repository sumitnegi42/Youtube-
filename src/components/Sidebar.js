import React from "react";
import { Box, Stack } from "@mui/material";
import { categories } from "../utils/constant";


const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Box className="sidebar">
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { xs: "auto", md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    type="button"
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && "#FC1503",
                        color: "white",
                    }}

                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? "white" : "red",
                            marginRight: "15px"
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    </Box>
);

export default Sidebar;
