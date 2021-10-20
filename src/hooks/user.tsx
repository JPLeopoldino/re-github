import React, {
    createContext,
    useContext,
    useState,
    useCallback
} from 'react';
import api from '../services/api';

interface UserContextData {
    getAllUserInfo(): Promise<void>;
    handleUserLogonChange(value: string): void;
    reposData: ReposData[];
    userData: UserData;
    loading: boolean;
    userLogon: string;
    reposLanguagesData: Object;
}

export interface UserData {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: false,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

export interface ReposData {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: RepoOwnerData,
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    forks_url: string,
    keys_url: string,
    collaborators_url: string,
    teams_url: string,
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string,
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: null,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    forks_count: number,
    mirror_url: null,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: null,
    allow_forking: boolean,
    is_template: boolean,
    topics: [],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string,
}

export interface RepoOwnerData {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
}

const dataInitialState = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: 'Joao',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: ''
}

const reposDataInitialState = {
    id: 0,
    node_id: '',
    name: '',
    full_name: '',
    private: false,
    owner: {
        login: '',
        id: 0,
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url: '',
        subscriptions_url: '',
        organizations_url: '',
        repos_url: '',
        events_url: '',
        received_events_url: '',
        type: '',
        site_admin: false
    },
    html_url: '',
    description: '',
    fork: false,
    url: '',
    forks_url: '',
    keys_url: '',
    collaborators_url: '',
    teams_url: '',
    hooks_url: '',
    issue_events_url: '',
    events_url: '',
    assignees_url: '',
    branches_url: '',
    tags_url: '',
    blobs_url: '',
    git_tags_url: '',
    git_refs_url: '',
    trees_url: '',
    statuses_url: '',
    languages_url: '',
    stargazers_url: '',
    contributors_url: '',
    subscribers_url: '',
    subscription_url: '',
    commits_url: '',
    git_commits_url: '',
    comments_url: '',
    issue_comment_url: '',
    contents_url: '',
    compare_url: '',
    merges_url: '',
    archive_url: '',
    downloads_url: '',
    issues_url: '',
    pulls_url: '',
    milestones_url: '',
    notifications_url: '',
    labels_url: '',
    releases_url: '',
    deployments_url: '',
    created_at: '',
    updated_at: '',
    pushed_at: '',
    git_url: '',
    ssh_url: '',
    clone_url: '',
    svn_url: '',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: '',
    has_issues: false,
    has_projects: false,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: false,
    is_template: false,
    topics: [],
    visibility: '',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: '',
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [userLogon, setUserLogon] = useState('');
    const [userData, setUserData] = useState<UserData>(
        dataInitialState as UserData,
    );
    const [reposData, setReposData] = useState<ReposData[]>([
        reposDataInitialState as ReposData,
    ]);
    const [reposLanguagesData, setReposLanguagesData] = useState({});

    const getUserInfo = useCallback(async () => {
        try {
            const response = await api.get<UserData>(`users/${userLogon}`)
            if(response.data)
            setUserData(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [setUserData, userLogon])

    const getReposInfo = useCallback(async () => {
        try {
            const response = await api.get<ReposData[]>(`users/${userLogon}/repos`)
            if(response.data)
            setReposData(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [setReposData, userLogon])

    const getReposLanguages = useCallback(async (name) => {
        try {
            const response = await api.get(`repos/${userLogon}/${name}/languages`)
            if(response.data)
            setReposLanguagesData(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [setReposLanguagesData, userLogon])

    const getAllUserInfo = useCallback(async () => {
        try {
            setLoading(true)
            await getUserInfo()
            await getReposInfo()
            // await getReposLanguages(reposData.map(i => i.name))
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [getUserInfo, getReposInfo, setLoading])

    const handleUserLogonChange = useCallback((value: string) => {
        setUserLogon(value)
    }, [setUserLogon])

    return (
        <UserContext.Provider
            value={{
                userData,
                reposData,
                loading,
                userLogon,
                getAllUserInfo,
                handleUserLogonChange,
                reposLanguagesData
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

const useUser = (): UserContextData => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error(
            'useUser must be used within an UserProvider'
        )
    }

    return context
}

export { useUser, UserProvider }
