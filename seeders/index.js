const seedCategories = require('./category-seed');

const seedAll = async () => {

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();
