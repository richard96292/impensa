import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./overview";
import Nav from "./navbar";
import Banner from "./banner";
import Archive from "./archive";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Wrapper, MainContainer } from "./style";
import Expenses from "./expenses";
import PageNotFound from "../PageNotFound";
import Settings from "./settings.jsx";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  document.title = "Dashboard";

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [expenses, setExpenses] = useState([]);

  async function getProfile() {
    try {
      const res = await fetch("/api/dashboard/", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      setName(parseData[0].user_name);
      setCurrency(parseData[0].user_currency);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getExpenses() {
    try {
      const res = await fetch("/api/dashboard/expenses", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      setExpenses(parseData);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getProfile();
    getExpenses();
  }, []);

  async function logout(e) {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  return (
    //FCFBFD
    <>
      <Wrapper>
        {isLoading === true ? null : (
          <BrowserRouter>
            <Nav expenses={expenses} name={name} />
            <Sidebar logout={logout} />
            {expenses.length === 0 ? (
              <Banner name={name} />
            ) : (
              <>
                <MainContainer>
                  <Switch>
                    <Route path="/dashboard/overview" exact>
                      <Overview expenses={expenses} currency={currency} />
                    </Route>
                    <Route path="/dashboard/archive" exact>
                      <Archive
                        expenses={expenses}
                        currency={currency}
                        setExpenses={setExpenses}
                      />
                    </Route>
                    <Route path="/dashboard/expenses" exact>
                      <Expenses expenses={expenses} currency={currency} />
                    </Route>
                    <Route path="/dashboard/settings" exact>
                      <Settings logout={logout} />
                    </Route>
                    <Route component={PageNotFound}></Route>
                  </Switch>
                </MainContainer>
              </>
            )}
          </BrowserRouter>
        )}
      </Wrapper>
    </>
  );
};

export default Dashboard;
