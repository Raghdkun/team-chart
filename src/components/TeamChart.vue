<template>
    <div class="team-chart-container">
      <h1 class="header-text">Beads at Team Management</h1>
      <div v-if="isLoading" class="loading-spinner">Loading...</div>
      <div v-else class="team-chart">
        <a v-for="manager in filteredManagers" :key="manager.id" :href="'https://wa.me/' + manager.phone" class="card manager-card" target="_blank" rel="noopener noreferrer">
          <img :src="manager.image" alt="manager photo" class="member-image" />
          <h3>{{ manager.name }}</h3>
          <p>{{ manager.role }}</p>
        </a>
        <a v-for="subManager in subManagers" :key="subManager.id" :href="'https://wa.me/' + subManager.phone" class="card sub-manager-card" target="_blank" rel="noopener noreferrer">
          <img :src="subManager.image" alt="sub-manager photo" class="member-image" />
          <h4>{{ subManager.name }}</h4>
          <p>{{ subManager.role }}</p>
        </a>
        <div class="group-managers">
          <div v-for="groupManager in groupManagers" :key="groupManager.id" class="card group-manager-card" @click="showDetails(groupManager)">
            <img :src="groupManager.image" alt="group-manager photo" class="member-image" />
            <h5>{{ groupManager.name }}</h5>
            <p>{{ groupManager.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: this.generateTeamData(),
        isLoading: false
      };
    },
    computed: {
      filteredManagers() {
        return this.team.filter(member => member.role === 'Manager');
      },
      subManagers() {
        return this.team.filter(member => member.role === 'Sub-Manager');
      },
      groupManagers() {
        return this.team.filter(member => member.role === 'Group Manager');
      }
    },
    methods: {
      generateTeamData() {
        // Generate fake team data with hierarchical structure, images, and phone numbers
        const team = [
          {
            id: 1,
            name: 'John Doe',
            role: 'Manager',
            phone: '1234567890',
            image: 'https://picsum.photos/100'
          },
          {
            id: 2,
            name: 'Jane Smith',
            role: 'Sub-Manager',
            phone: '0987654321',
            image: 'https://picsum.photos/100'
          },
          { id: 3, name: 'Group Manager 1', role: 'Group Manager', phone: '1122334455', image: 'https://picsum.photos/100' },
          { id: 4, name: 'Group Manager 2', role: 'Group Manager', phone: '2233445566', image: 'https://picsum.photos/100' },
          { id: 5, name: 'Group Manager 3', role: 'Group Manager', phone: '3344556677', image: 'https://picsum.photos/100' },
          { id: 6, name: 'Group Manager 4', role: 'Group Manager', phone: '4455667788', image: 'https://picsum.photos/100' },
          { id: 7, name: 'Group Manager 5', role: 'Group Manager', phone: '5566778899', image: 'https://picsum.photos/100' },
          {
            id: 8,
            name: 'Michael Brown',
            role: 'Developer',
            phone: '6677889900',
            image: 'https://picsum.photos/100'
          }
        ];
        return team;
      },
      showDetails(groupManager) {
        alert(`Name: ${groupManager.name}\nRole: ${groupManager.role}\nPhone: ${groupManager.phone}`);
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .team-chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
  }
  
  .header-text {
    margin-bottom: 20px;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
  }
  
  .team-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .card {
    background: #1e1e1e;
    border: 1px solid #333;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    width: 100%;
    max-width: 250px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    text-decoration: none;
    color: #e0e0e0;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  
  .group-managers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
  .group-managers .group-manager-card {
    flex: 1 1 calc(20% - 20px);
    margin: 10px;
    cursor: pointer;
  }
  
  .member-image {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .loading-spinner {
    text-align: center;
    font-size: 18px;
    padding: 20px;
  }
  </style>
  