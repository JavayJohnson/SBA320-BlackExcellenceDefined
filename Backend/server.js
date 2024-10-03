app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true
}));